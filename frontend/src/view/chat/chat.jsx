import React, { useState } from "react";
import ChatSidebar from "../../components/sidebar";

export default function Chat() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="bg-[#F5F6FA] h-screen flex">
      {isSidebarVisible ? (
        <div className="w-72 mt-2 overflow-hidden transition-all ease-in-out duration-300">
          <ChatSidebar onClose={() => setSidebarVisible(false)} />
        </div>
      ) : (
        <div className="flex items-start justify-start p-4 w-auto h-full transition-all ease-in-out duration-300">
          <div className="flex space-x-4 bg-white rounded-full shadow-md p-2">
            {/* Chat Icon */}
            <button
              className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
              onClick={() => setSidebarVisible(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                />
              </svg>
            </button>

            {/* Edit Icon */}
            <button
              className="p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-400 transition-all duration-300"
            >
               <img src="/assets/edit.png" alt="edit" className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
