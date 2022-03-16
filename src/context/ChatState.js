import { createContext, useReducer } from "react";
import ChatReducer from "./ChatReducer";

const initialState = {
  chat: [],
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
    dispatch({
      type: "ADD_BOT_RESPONSE",
      payload: message,
    });
  };

  const setInitialState = (chat) => {
    dispatch({
      type: "SET_INITIAL_STATE",
      payload: chat,
    });
  };

  return (
    <ChatContext.Provider
      value={{
        chat: state.chat,
        addBotResponse,
        addUserResponse,
        setInitialState,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
