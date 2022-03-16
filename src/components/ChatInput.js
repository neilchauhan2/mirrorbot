import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatState";
import "../styles/ChatInput.css";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { addBotResponse, addUserResponse, chat } = useContext(ChatContext);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length > 0) {
      addUserResponse(message);
      addBotResponse(message);
      setMessage("");
    }
  };

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chat));
  });

  return (
    <div className="chat-input-container">
      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="chat-input"
          className="chat-input-field"
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
        />
        <button className="submit-btn" type="submit">
          <ion-icon name="send"></ion-icon>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
