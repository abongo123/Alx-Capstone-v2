import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./firebaseConfig"
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Resources from './components/Resources';
import BookSession from './components/BookSession';
import ChatSupport from './components/ChatSupport';
import PrivateDiary from './components/PrivateDiary';
import PrivateRoute from "./components/PrivateRoute";
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/chat-support" element={<ChatSupport />} />
        <Route path="/private-dairy" element={<PrivateDiary />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />


      </Routes>
    </Router>
  );
}

export default App;
