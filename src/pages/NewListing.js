import React from 'react';
import { Camera, DollarSign } from 'lucide-react';

function NewListing() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Create New Listing</h1>
      
      <div className="bg-white rounded-lg shadow p-4">
        <div className="mb-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Camera className="mx-auto text-gray-400 mb-2" size={32} />
            <p className="text-gray-600">Tap to add photos</p>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input 
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="What are you selling?"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Price</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input 
                type="text"
                className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Textbooks</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
              placeholder="Describe what you're selling..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Post Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewListing;