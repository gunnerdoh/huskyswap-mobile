import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MessageSquare, PlusCircle, User } from 'lucide-react';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <button 
          onClick={() => navigate('/')}
          className={`flex flex-col items-center ${isActive('/') ? 'text-purple-600' : 'text-gray-600'}`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button 
          onClick={() => navigate('/messages')}
          className={`flex flex-col items-center ${isActive('/messages') ? 'text-purple-600' : 'text-gray-600'}`}
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">Messages</span>
        </button>

        <button 
          onClick={() => navigate('/new-listing')}
          className={`flex flex-col items-center ${isActive('/new-listing') ? 'text-purple-600' : 'text-gray-600'}`}
        >
          <PlusCircle size={24} />
          <span className="text-xs mt-1">Sell</span>
        </button>

        <button 
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center ${isActive('/profile') ? 'text-purple-600' : 'text-gray-600'}`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </nav>
  );
}

export default BottomNav;