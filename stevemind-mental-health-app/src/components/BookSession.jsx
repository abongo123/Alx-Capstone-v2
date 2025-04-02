import React, { useState } from "react"
import { db } from "../firebaseConfig"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { time } from "framer-motion"

const specialists = [
  {
    id: 1,
    name: "Dr. Mary Almadrones",
    specialty: "Psychologist",
    image: "https://images.app.goo.gl/buQqJpjdiov8Eevc6",
  },
  {
    id: 2,
    name: "Dr. Imran Khan",
    specialty: "Psychologist",
    image: "/images/Profile1.jpg"
  },
  {
    id: 3,
    name: "Dr. Josphine Kompoong",
    specialty: "Therapists",
    image: "/Images/Profile2.jpg",
  },
  {
    id: 4,
    name: "Dr. Esther Namarome",
    specialty: "Psychiatric",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Dr. Peter Titus",
    specialty: "Clinical Psychologists",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Dr. Ann Ogolla",
    specialty: "Behavioral Therapists",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Dr. Jack . A.O",
    specialty: "Behavioral Therapists",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Dr. Jake M. T",
    specialty: "Behavioral Therapists",
    image: "https://via.placeholder.com/150",
  },
];

const BookSession = () => {
  const [formData, setFormData] = useState(
    specialists.reduce((acc, spec) => {
      acc[spec.id] = { name: "", email: "", date: "", time: "", anonymous: false };
      return acc;
    }, {})
  );

  const handleChange = (e, id) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: {
        ...formData[id],
        [name]: type === "checkbox" ? checked : value,
      },
    });
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const selectedSpecialist = specialists.find((spec) => spec.id === id);
    if (!selectedSpecialist) {
      alert("Specialist not found.");
      return;
    }

    try {
      await addDoc(collection(db, "session"), {
        specialist: selectedSpecialist.name,
        name: formData[id].anonymous ? "Anonymous" : formData[id].name,
        email: formData[id].email,
        date: formData[id].date,
        time: formData[id].time,
        createdAt: Timestamp.now(),
      });

      alert(`Session booked successfully with ${selectedSpecialist.name}!`);

      setFormData({
        ...formData,
        [id]: { name: "", email: "", date: "", time: "", anonymous: false },
      });
    } catch (error) {
      console.error("Error booking session", error);
      alert("Error Booking Session, Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 p-6">
      <h1 className="text-2xl font-bold text-center text-black mb-6">
        Book a Session with a Specialist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {specialists.map((spec) => (
          <div key={spec.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={spec.image}
              alt={spec.name}
              className="w-32 h-32 object-cover rounded-md mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-2">{spec.name}</h3>
            <p className="text-sm text-gray-500 text-center">{spec.specialty}</p>

            <form onSubmit={(e) => handleSubmit(e, spec.id)} className="mt-4 space-y-2">
              {!formData[spec.id].anonymous && (
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData[spec.id].name}
                    onChange={(e) => handleChange(e, spec.id)}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData[spec.id].email}
                  onChange={(e) => handleChange(e, spec.id)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData[spec.id].date}
                  onChange={(e) => handleChange(e, spec.id)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData[spec.id].time}
                  onChange={(e) => handleChange(e, spec.id)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData[spec.id].anonymous}
                  onChange={(e) => handleChange(e, spec.id)}
                  className="mr-2"
                />
                <label>Book as Anonymous</label>
              </div>

              <button type="submit" className="w-full bg-green-400 text-white p-2 rounded hover:bg-lime-600">
                Book Session
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSession;