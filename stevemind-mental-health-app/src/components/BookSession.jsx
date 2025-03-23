import React, { useState } from "react"
import { db } from "../firebaseConfig"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { time } from "framer-motion"

const BookSession =() => {
  const [formData, setFormData] = useState ({name: "", email: "", date: "", time: "", anonymous: false})

  const handleChange = (e) => {
    const { name, value, type, checked} = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      await addDoc(collection(db, "session"), {
        name: formData.anonymous ? "Anonymous" : formData.name,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        createdAt: Timestamp.now()
      })
      alert ("Session booked Successfully!")
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        anonymous: false
      })
    } catch (error) {
      console.error("Error booking session", error)
      alert("Error Booking Session, Try again!")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-300 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Book a Session</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!formData.anonymous && (
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required></input>
            </div>
          )}
          <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required></input>
            </div>

            <div>
              <label className="block text-sm font-medium">Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required></input>
            </div>

            <div>
              <label className="block text-sm font-medium">Time</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded" required></input>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} className="mr-2"></input>
              <label>Book as Anonymous</label>
            </div>
            <button type="submit" className="w-full bg-green-400 text-white p-2 rounded hover:bg-green-600">Book Session</button>

        </form>
      </div>

    </div>
  )
}

export default BookSession