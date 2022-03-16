import { createContext, useReducer } from "react";
import ChatReducer from "./ChatReducer";

const initialState = {
  chat: [
    {
      message: "Hello, how are you?",
      isUserResponse: true,
    },
    {
      message: "Hello, how are you?",
      isUserResponse: false,
    },
    {
      message: "Hello, What is your name?",
      isUserResponse: true,
    },
    {
      message: "Hello, What is your name?",
      isUserResponse: false,
    },
  ],
  isLoading: false,
};

// Create context
export const ChatContext = createContext(initialState);

// Provider component
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  // actions
  const addUserResponse = (message) => {
    dispatch({
      type: "ADD_USER_RESPONSE",
      payload: message,
    });
  };

  const addBotResponse = (message) => {
    setTimeout(() => {}, 2000);
    dispatch({
      type: "ADD_BOT_RESPONSE",
      payload: message,
    });
  };

  return (
    <ChatContext.Provider
      value={{
        chat: state.chat,
        addBotResponse,
        addUserResponse,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
