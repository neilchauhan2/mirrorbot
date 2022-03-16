import React, { useCallback, useContext, useEffect } from "react";
import ChatText from "./ChatText";
import { ChatContext } from "../context/ChatState";
import "../styles/Chat.css";

const Chat = () => {
  const { chat, setInitialState } = useContext(ChatContext);
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("chat")) {
      setInitialState(JSON.parse(localStorage.getItem("chat")));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="chat">
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
              {!response.isUserResponse ? (
                <div className="chat-icon bot-icon">
                  <ion-icon name="flash"></ion-icon>
                </div>
              ) : (
                <div className="chat-icon user-icon">
                  <ion-icon
                    name="person-circle"
                    className="chat-icon user-icon"
                  ></ion-icon>
                </div>
              )}
              {<ChatText chatResponse={response} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
