import React, { useState } from "react";
import ChatSidebar from "../../components/sidebar";
import DeleteConfirmationModal from "../../components/deleteConfirmation";

export default function Chat() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [chatToDelete, setChatToDelete] = useState(null); // State to track the chat to be deleted
  const [message, setMessage] = useState(""); // For handling chat input
  const [messages, setMessages] = useState([]); // For displaying sent messages in the chat

  // Chat history
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

  // Send message functionality
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { message, date: "Now" }]);
      setMessage("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleDeleteRequest = (chat) => {
    setChatToDelete(chat); // Set the chat that should be deleted when the modal is confirmed
  };

  const handleDelete = () => {
    setChatHistory((prevHistory) =>
      prevHistory.filter((chat) => chat.id !== chatToDelete.id)
    );
    setChatToDelete(null); // Close the modal
  };

  return (
    <div className="bg-[#F5F6FA] h-screen flex flex-col">
      {/* Sidebar and Chat Content */}
      <div className="flex-grow flex">
        {/* Sidebar */}
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

        {/* Chat Content */}
        <div
          className={`flex-grow flex flex-col justify-between transition-all duration-300 ${
            isSidebarVisible ? "mr-6" : "mr-2"
          }`}
        >
          {/* Top-right with Clear button and Avatar */}
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300 mr-2"
              onClick={() => setMessages([])}
            >
              Clear
            </button>
            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
              T
            </div>
          </div>

          {/* Chat Display Section */}
          <div className="flex-grow p-4 overflow-y-auto  ">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className="mb-2 text-right">
                  <span className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block">
                    {msg.message}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Su layout here</p>
            )}
          </div>

          {/* Chat Input Area */}
          <div className="p-4 flex items-center space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message"
              className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
            <button
              className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600"
              onClick={handleSendMessage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M2 21L23 12 2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

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
