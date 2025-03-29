import React, { useState, useEffect} from "react"
import { db, auth } from "../firebaseConfig"
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore"

const ChatSupport = () => {
    const [message, setMessage] = useState ("")
    const [messages, setMessages] = useState ([])

    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const q = query(
            collection(db, "chatMessages"), 
            orderBy("createdAt", "asc")
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data()
            }))
            setMessages(messagesData)
        })

        return () => unsubscribe()
    }, [])

    const handleSend = async () => {
        if (!message.trim()) {
            alert("Kindly enter a message")
            return
        }
        if (!user) {
            alert("Please sign in before sending a message")
            return
        }
        try {
            await addDoc(collection(db, "chatMessages"), {
                userId: user.uid,
                userName: user.email || "Anonymous",
                message: message,
                createdAt: serverTimestamp()
            })
            setMessage("")
        } catch (error) {
            console.error("Error sending message:", error)
            alert("Failed to send message. Try again.")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Chat Support</h2>

                <div className="h-64 overflow-y-auto border border-gray-300 p-3 rounded mb-4 bg-gray-50">
                    {messages.length === 0 ? (
                        <p className="text-gray-500">Talk to Us!</p>
                    ) : (
                        messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`p-2 mb-2 rounded-lg ${
                                    msg.userId === user?.uid
                                        ? "bg-green-100 text-right"
                                        : "bg-gray-200 text-left"
                                }`}>
                                <p className="text-sm font-semibold">{msg.userName}</p>
                                <p className="text-gray-700">{msg.message}</p>
                                <p className="text-xs text-gray-400"> {msg.createdAt?.toDate ? new Date(msg.createdAt.toDate()).toLocaleString(): "Just now"}</p>
                            </div>
                        ))
                    )}
                    </div>

                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="3" className="w-full p-2 border rounded mb-2" placeholder="Type your message..."></textarea>

               <button onClick={handleSend} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Send</button>
            </div>
        </div>
    )
}

export default ChatSupport;
