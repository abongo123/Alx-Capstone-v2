import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import Resources from "../components/Resources";
import BookSession from "../components/BookSession";
import ChatSupport from "../components/ChatSupport";
import PrivateDiary from "../components/PrivateDiary";
import Register from "./pages/Register"
import Login from "../pages/Login";
import { Sidebar } from "lucide-react";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/chat-support" element={<ChatSupport />} />
        <Route path="/private-diary" element={<PrivateDiary />} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="sidebar" element={<Sidebar/>} />



      </Routes>
    </Router>
  );
};

export default AppRoutes;
