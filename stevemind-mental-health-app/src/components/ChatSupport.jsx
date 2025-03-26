import React, { useState, useEffect} from "react"
import {db, auth} from "../firebaseConfig"
import{ collection,addDoc,onSnapshot,query,orderBy,serverTimestamp} from "firebase/firestore"

const chatSupport = () => {
    const [message, setMessage] = useState ("")
    const [messages, setMessages] = useState ([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currenUser) => {
            setUser(currenUser)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const q = query(
            collection(db,"chatMessage"), 
            orderBy("createdAt", "asc")
        )

        const unsubscribe = onSnapshot(q,(snapshot) => {
            const messagesData = snapshot.docs.map((doc) => ({
                id:doc.id, 
                ...doc.data()
            }))
            setMessages(messagesData)
        })

        return() => unsubscribe()
    }, [])

    const handleSend = async () => {
        if (!message.trim()) {
            alert("Kindly enter a messages")
            return
        }
        if (!user) {
            alert ("Please sign in before sending a message")
            return
        }
        try {
            await addDoc(collection(db, "chatMessages"), {
                userId: user.uid,
                userName: user.email || "Anonymous",
                message: message,
                createdAt: serverTimestamp()

            })
            setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again.");
    }
            
        }

        return(
            <div className="flex items-center min-h-screen bg-gray-300 p-5">
                <h2>Chat Support</h2>

                <div className="h-64 overflow-y-auto border-gray-500 p-3 rounded mb-4 bg-gray-100">

                </div>
            </div>

        )
    }
