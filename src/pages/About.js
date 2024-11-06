import React from 'react';

function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">About HuskySwap</h1>
      <div className="p-6 bg-white rounded-lg shadow">
        <p className="text-gray-600">
          HuskySwap is a marketplace platform designed specifically for University of Washington students
          to buy, sell, and trade items within the campus community. Our platform makes it easy to find
          what you need from fellow Huskies.
        </p>
        <h2 className="mt-6 mb-3 text-xl font-semibold text-gray-800">How It Works</h2>
        <p className="text-gray-600">
          1. Browse listings from UW students<br />
          2. Connect with sellers through the platform<br />
          3. Meet safely on campus for exchanges<br />
          4. Rate your experience to help build trust
        </p>
      </div>
    </div>
  );
}

export default About;