import "./App.css";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";
import { ChatProvider } from "./context/ChatState";

const App = () => {
  return (
    <ChatProvider>
      <Header />
      <Chat />
      <ChatInput />
    </ChatProvider>
  );
};

export default App;
