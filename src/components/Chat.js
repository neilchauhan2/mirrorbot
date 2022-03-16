import React, { useCallback, useContext } from "react";
import ChatText from "./ChatText";
import ChatInput from "./ChatInput";
import { ChatContext } from "../context/ChatState";
import "../styles/Chat.css";

const Chat = () => {
  const { chat } = useContext(ChatContext);
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  return (
    <div className="chat-container">
      {chat.map((response, index) => {
        const lastResponse = chat.length - 1;
        return (
          <div
            ref={lastResponse ? setRef : null}
            key={index}
            className="chat-response-container"
            style={{
              flexFlow: response.isUserResponse ? "row-reverse" : "row",
            }}
          >
            <ChatText chatResponse={response} />
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
