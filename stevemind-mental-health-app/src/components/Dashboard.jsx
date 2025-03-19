import { useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const navigate =useNavigate()

  const handleLogout = async () => {
    await signOut (auth)
    navigate("/login")
  }

  return (
    <div className="flex min-h-screen bg-green-100">
      <Sidebar>

      </Sidebar>

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-green-500">Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow"></div>
        <h2 className="text-xl font-semibold">Mental Health Resources</h2>
        <p className="text-gray-600 mt-2">Access Information on Mental Health</p>
      </div>

      <div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow"></div>
        <h2 className="text-xl font-semibold">Book Session</h2>
        <p className="text-gray-600 mt-2">Schedule an appointment with a therapist</p>
        </div>
      </div>

      <div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow"></div>
        <h2 className="text-xl font-semibold">Chat Support</h2>
        <p className="text-gray-600 mt-2">Talk to us if you have any questions</p>
        </div>
      </div>

      <div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow"></div>
        <h2 className="text-xl font-semibold">Private Diary</h2>
        <p className="text-gray-600 mt-2">Write down your thoughts privately</p>
        </div>
      </div>


    </div>

  )
}






















export default Dashboard