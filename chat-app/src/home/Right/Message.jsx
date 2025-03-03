import React from "react";
import { useState } from "react";

const Message = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How are you?", sender: "user" },
    { id: 2, text: "I'm good, thank you! How about you?", sender: "bot" },
    {
      id: 3,
      text: "I'm doing great! What can I help you with?",
      sender: "user",
    },
    { id: 4, text: "Hello! How are you?", sender: "user" },
    { id: 5, text: "I'm good, thank you! How about you?", sender: "bot" },
    {
      id: 6,
      text: "I'm doing great! What can I help you with?",
      sender: "user",
    },
    {
      id: 7,
      text: "I'm doing great! What can I help you with?",
      sender: "user",
    },
    { id: 8, text: "Hello! How are you?", sender: "user" },
    { id: 9, text: "I'm good, thank you! How about you?", sender: "bot" },
    {
      id: 10,
      text: "I'm doing great! What can I help you with?",
      sender: "user",
    },
  ]);

  return (
    <div className="container my-2 message-container">
      <div className="">
        <div className="card-body">
          <ul className="list-unstyled">
            {messages.map((message) => (
              <li
                key={message.id}
                className={`d-flex ${
                  message.sender === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                } mb-3`}
              >
                <div
                  className={`p-3 rounded-3 ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-light text-black"
                  }`}
                >
                  {message.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Message;
