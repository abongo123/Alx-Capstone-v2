import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import {collection,addDoc,onSnapshot,query,where,orderBy,deleteDoc,doc,} from "firebase/firestore";
import Footer from "../pages/Footer";

const PrivateDiary = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "diaryEntries"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const entriesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEntries(entriesData);
      });

      return () => unsubscribe();
    }
  }, [user]);

  const handleSave = async () => {
    if (!entry.trim()) {
      alert("Please write something before saving.");
      return;
    }

    if (!user) {
      alert("You need to be logged in to save an entry.");
      return;
    }

    try {
      await addDoc(collection(db, "diaryEntries"), {
        userId: user.uid,
        content: entry,
        createdAt: new Date(),
      });

      setEntry("");
      alert("Entry saved successfully!");
    } catch (error) {
      console.error("Error saving entry:", error);
      alert("Failed to save entry. Try again.");
    }
  };



  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await deleteDoc(doc(db, "diaryEntries", id));
        alert("Entry deleted successfully.");
      } catch (error) {
        console.error("Error deleting entry:", error);
        alert("Failed to delete entry.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-5 text-center">Private Diary</h2>

 <textarea value={entry} onChange={(e) => setEntry(e.target.value)} rows="12" className="w-full p-3 border rounded mb-4"placeholder="Write your thoughts here..."></textarea>



        <button onClick={handleSave}className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-5">Save</button>
        <div>
          <h3 className="text-lg font-semibold mb-3"></h3>
          {entries.length === 0 ? (
            <p className="text-gray-500"></p>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="p-4 border rounded-lg shadow-md bg-gray-50">
                  <p className="text-gray-700">{entry.content}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(entry.createdAt.toDate()).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"> Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateDiary;
