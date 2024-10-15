import React, { useState } from "react";
import ChatSidebar from "../../components/sidebar";
import DeleteConfirmationModal from "../../components/deleteConfirmation"; // Import the modal component

export default function Chat() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [chatToDelete, setChatToDelete] = useState(null); // State to track the chat to be deleted

  // Move the chat history to the parent component
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      date: "Today",
      message: "Do I tell my parents about bullying?",
      active: false,
    },
    {
      id: 2,
      date: "Yesterday",
      message: "Where do I report Cyber Bullying?",
      active: false,
    },
    {
      id: 3,
      date: "Yesterday",
      message: "Can I stay anonymous and sue for my rights in legal matters?",
      active: false,
    },
    {
      id: 4,
      date: "Last 30 days",
      message: "Someone stole my belonging from my bag",
      active: false,
    },
    {
      id: 5,
      date: "Last 30 days",
      message: "I lost my money during a trip",
      active: false,
    },
  ]);

  const handleDeleteRequest = (chat) => {
    setChatToDelete(chat); // Set the chat that should be deleted when the modal is confirmed
  };

  const handleDelete = () => {
    // Perform the deletion action
    setChatHistory((prevHistory) =>
      prevHistory.filter((chat) => chat.id !== chatToDelete.id)
    );
    setChatToDelete(null); // Close the modal
  };

  return (
    <div className="bg-[#F5F6FA] h-screen flex">
      {isSidebarVisible ? (
        <div className="w-72 mt-2 overflow-hidden transition-all ease-in-out duration-300">
          <ChatSidebar
            chatHistory={chatHistory} // Pass chat history to the sidebar
            onClose={() => setSidebarVisible(false)}
            onDeleteRequest={handleDeleteRequest} // Pass the delete request handler
          />
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
            <button className="p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-400 transition-all duration-300">
              <img src="/assets/edit.png" alt="edit" className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Modal for Deletion Confirmation */}
      {chatToDelete && (
        <DeleteConfirmationModal
          title={chatToDelete.message} // Pass the message title to the modal
          onCancel={() => setChatToDelete(null)} // Hide modal on cancel
          onDelete={handleDelete} // Confirm deletion
        />
      )}
    </div>
  );
}
