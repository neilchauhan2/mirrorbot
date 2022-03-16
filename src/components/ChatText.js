import React, { useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatState";
import "../styles/ChatText.css";

const ChatText = ({ chatResponse }) => {
  return (
    <div
      className={`chat-text-container ${
        chatResponse.isUserResponse ? "user-response-text" : "bot-response-text"
      }`}
    >
      <p className="chat-text-body">{chatResponse.message}</p>
    </div>
  );
};

export default ChatText;
