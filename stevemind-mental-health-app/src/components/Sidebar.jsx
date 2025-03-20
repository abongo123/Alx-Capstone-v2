import { Link } from "react-router-dom"
import { Home, Calendar, MessageSquare, Book, LogOut } from "lucide-react";

const Sidebar = () => {

    return (
        <div className="w-64 bg-white shadow-lg min-h-screen p-4"><h2 className="text-3xl font-bold text-blue-800 mb-6">Mental Health</h2>

        <nav>
            <Link to="/dashboard" className="flex items-center p-3 text-black hover:bg-gray-200 rounded">
            <Home className="mr-2" /> Dashboard
            </Link>

            <Link to="/resources" className="flex items-center p-3 text-black hover:bg-gray-200 rounded">
            <Book className="mr-2" /> Resources
            </Link>

            <Link to="/book-session" className="flex items-center p-3 text-black hover:bg-gray-200 rounded">
            <Calendar className="mr-2" /> Book Session
            </Link>

            <Link to="/chat-support" className="flex items-center p-3 text-black hover:bg-gray-200 rounded">
            <MessageSquare className="mr-2" /> Chat Support
            </Link>

            <Link to="/private-dairy" className="flex items-center p-3 text-black hover:bg-gray-200 rounded"> 
            Private Diary
            </Link>

            <Link to="/logout" className="flex items-center p-3 text-black hover:bg-gray-200 rounded mt-6">
            <Logout className="mr-2" /> Logout
            </Link>
        </nav>
        </div>
    )
}

export default Sidebar;