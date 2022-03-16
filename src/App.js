import "./App.css";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import { ChatProvider } from "./context/ChatState";

const App = () => {
  return (
    <ChatProvider>
      <h1>Chat App</h1>
      <Chat />
      <ChatInput />
    </ChatProvider>
  );
};

export default App;
