import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Package, Star, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Profile() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center pb-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                        {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{user?.displayName || 'User'}</h2>
                    <p className="text-gray-600">{user?.email}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                        <p className="text-xl font-bold">12</p>
                        <p className="text-gray-600">Listings</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-bold">4.9</p>
                        <p className="text-gray-600">Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-bold">28</p>
                        <p className="text-gray-600">Sold</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-md">
                        <Package className="w-5 h-5 mr-3" />
                        <span>My Listings</span>
                    </button>
                    <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-md">
                        <Star className="w-5 h-5 mr-3" />
                        <span>Reviews</span>
                    </button>
                    <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-md">
                        <Settings className="w-5 h-5 mr-3" />
                        <span>Settings</span>
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-md text-red-500"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        <span>Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;