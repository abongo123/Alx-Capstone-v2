import { Link } from "react-router-dom"
import { Home, Calendar, MessageSquare, Book, LogOut, Notebook } from "lucide-react";


const Sidebar = () => {

    return (
        <div className="w-40 bg-white shadow-lg min-h-screen p-4">

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
            <Notebook className="mr-2"/> Private Diary
            </Link>

            <Link to="/logout" className="flex items-center p-3 text-red-500 hover:bg-slate-500 rounded mt-6">
          <LogOut className="mr-2" /> Logout
           </Link>
        </nav>
        </div>
    )
}

export default Sidebar;