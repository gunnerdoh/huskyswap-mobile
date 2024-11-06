import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Messages from './pages/Messages';
import ChatDetail from './pages/ChatDetail';
import Profile from './pages/Profile';
import NewListing from './pages/NewListing';
import { Login, Signup } from './pages/Auth';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route 
          path="/*" 
          element={
            user ? (
              <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="container mx-auto px-4 py-4 pb-20">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/messages/:userId" element={<ChatDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/new-listing" element={<NewListing />} />
                  </Routes>
                </main>
                <BottomNav />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;