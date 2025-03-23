import { useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"

const Dashboard = () => {
  const navigate =useNavigate()

  const handleLogout = async () => {
    await signOut (auth)
    navigate("/login")
  }

  return (
    <div className="flex min-h-screen bg-green-100">
     <Sidebar />

      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-3xl font-bold text-green-500 text-center mb-6">Dashboard</h1>
      </div>
<div className="flex flex-col gap-4 items-center">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow h-[200px]">
        <h2 className="text-xl font-semibold text-black">Mental Health Resources</h2>
        <p className="text-gray-500 mt-2">Access Information on Mental Health</p>
        <Link to="/resources" className="text-blue-500 hover:underline"></Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow h-[200px]">
        <h2 className="text-xl font-semibold text-black">Book Session</h2>
        <p className="text-gray-500 mt-2">Schedule an appointment</p>
        <Link to="/book-session" className="text-blue-500 hover:underline"></Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow h-[200px]">
        <h2 className="text-xl font-semibold text-black">Chat Support</h2>
        <p className="text-gray-500 mt-2">Get Immediate Help from a counselor</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow h-[200px]">
        <h2 className="text-xl font-semibold text-black">Private Diary</h2>
        <p className="text-gray-500 mt-2">Write down your thoughts privately</p>
        </div>
      </div>
      </div>


    </div>

  )
}




















export default Dashboard