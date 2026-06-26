import { useState } from "react";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! 👋 I'm your AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: "This is where your AI response will appear.",
      },
    ]);

    setInput("");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-gray-900 text-white flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold">🐶 Pet AI</h1>
          <p className="text-gray-400 text-sm">
            Veterinary Assistant
          </p>
        </div>

        <div className="flex-1 p-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition">
            + New Chat
          </button>
        </div>
      </aside>

      {/* Chat Section */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-white shadow px-6 py-4">
          <h2 className="text-xl font-semibold">
            AI Veterinary Assistant
          </h2>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`flex gap-3 max-w-3xl ${
                  msg.sender === "user"
                    ? "flex-row-reverse"
                    : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    msg.sender === "bot"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {msg.sender === "bot" ? (
                    <FaRobot />
                  ) : (
                    <FaUser />
                  )}
                </div>

                <div
                  className={`px-5 py-3 rounded-2xl shadow ${
                    msg.sender === "bot"
                      ? "bg-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Input */}
        <div className="bg-white border-t p-5">
          <div className="max-w-5xl mx-auto flex gap-3">

            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl transition"
            >
              <FaPaperPlane />
            </button>

          </div>
        </div>

      </main>

    </div>
  );
};

export default Chatbot;