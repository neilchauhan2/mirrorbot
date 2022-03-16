import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import { ChatProvider } from "./context/ChatState";

const App = () => {
  return (
    <ChatProvider>
      <h1>Chat App</h1>
      <Chat />
    </ChatProvider>
  );
};

export default App;
