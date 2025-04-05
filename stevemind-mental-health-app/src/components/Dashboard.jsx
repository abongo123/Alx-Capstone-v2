import { useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"
import Footer from "../pages/Footer";
import { Home, Calendar, MessageSquare, Book, LogOut, Notebook } from "lucide-react";

const Dashboard = () => {
  const navigate =useNavigate()

  const handleLogout = async () => {
    await signOut (auth)
    navigate("/login")
  }

  return (
    <div>
      <div className="w-full border-b border-gray-400 bg-gray-200 p-3">
      <h1 className="text-left text-2xl text-blue-800 font-extralight">Serenity Hub</h1>
    </div>
    <div className="flex min-h-screen bg-green-100">
     <Sidebar /> 
     <div className="flex flex-col gap-4 items-center">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow h-full mx-4 mt-7">
        <Link to="/resources" className="flex flex-col items-center p-3 text-black hover:bg-gray-200 rounded font-bold">
            <Book className="mr-2" />Resources
            </Link>
        <p className="text-gray-500 mt-4 font-serif">Access Information on Mental Health</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow h-full mx-4 mt-7">
        <Link to="/book-session" className="flex flex-col items-center p-3 text-black hover:bg-gray-200 rounded font-semibold">
            <Calendar className="mr-2" /> Book Session
        </Link>
        <p className="text-gray-500 mt-4 font-serif">Schedule an appointment</p>
        <Link to="/book-session" className="text-blue-500 hover:underline"></Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow h-full mx-4 mt-7">
         <Link to="/chat-support" className="flex items-center p-3 text-black hover:bg-gray-200 rounded font-bold">
          <MessageSquare className="mr-2" /> Chat Support</Link>
        <p className="text-gray-500 mt-4 font-serif">Get Immediate Help from a counselor</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow h-full mx-4 mt-7">
        <Link to="/private-dairy" className="flex items-center p-3 text-black hover:bg-gray-200 rounded font-bold"> 
        <Notebook className="mr-2"/> Private Diary</Link>
        <p className="text-gray-500 mt-4 font-serif">Write down your thoughts privately</p>
        </div>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}




















export default Dashboard