import React from 'react';

const ChatSidebar = () => {
  return (
    <div className="flex flex-col w-72 h-screen bg-white shadow-lg border rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">

        <button className="text-gray-500 hover:text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 text-sm focus:outline-none"
        />
        <span className="absolute top-2 left-3 text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </span>
        <button className="absolute top-2 right-3 text-gray-500 hover:text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-grow overflow-y-auto">
        <div className="text-gray-500 text-xs mb-2">Today</div>
        <ul className="space-y-1 mb-6">
          <li>Do I tell my parents about bullying?</li>
        </ul>
        
        <div className="text-gray-500 text-xs mb-2">Yesterday</div>
        <ul className="space-y-1 mb-6">
          <li>Where do I report Cyber Bullying?</li>
          <li>Can I stay anonymous and sue?</li>
        </ul>

        <div className="text-gray-500 text-xs mb-2">Last 30 days</div>
        <ul className="space-y-1 mb-6">
          <li>Someone stole my belonging</li>
          <li>I lost my money</li>
        </ul>
      </div>

      {/* Logout Button */}
      <div>
        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
