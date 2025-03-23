import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import { Sidebar } from 'lucide-react';
import Resources from './components/Resources';
import BookSession from './components/BookSession';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book-session" element={<BookSession />} />
      </Routes>
    </Router>
  );
}

export default App;
