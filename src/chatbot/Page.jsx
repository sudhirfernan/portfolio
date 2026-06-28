import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 How can I help you today?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    // Temporary bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm still learning! 🤖",
          sender: "bot",
        },
      ]);
    }, 20);

    setInput("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-md h-[650px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">AI Chatbot</h1>
          <p className="text-sm opacity-80">
            Ask me anything
          </p>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">

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
                className={`px-4 py-2 rounded-2xl max-w-[75%]
                ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

        </div>

        {/* Input */}
        <div className="border-t p-3 flex gap-2">

          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-5 rounded-full hover:bg-blue-700 transition"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}