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
     <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-green-500">Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-black">Mental Health Resources</h2>
        <p className="text-gray-500 mt-2">Access Information on Mental Health</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-black">Book Session</h2>
        <p className="text-gray-500 mt-2">Schedule an appointment</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-black">Chat Support</h2>
        <p className="text-gray-500 mt-2">Get Immediate Help from a counselor</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-black">Private Diary</h2>
        <p className="text-gray-500 mt-2">Write down your thoughts privately</p>
        </div>


      </div>


    </div>

  )
}




















export default Dashboard