import React, { useContext } from "react";
import ChatText from "./ChatText";
import ChatInput from "./ChatInput";
import { ChatContext } from "../context/ChatState";

const Chat = () => {
  const { chat } = useContext(ChatContext);

  return (
    <div className="chat-container">
      {chat.map((response) => (
        <ChatText chatResponse={response} />
      ))}
      <ChatInput />
    </div>
  );
};

export default Chat;
