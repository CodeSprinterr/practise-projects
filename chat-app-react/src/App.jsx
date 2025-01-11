import { useState } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const data = [ 1,2,3];

  return (
   
    <div className="flex h-screen bg-gray-100">
      <div className="container mx-auto my-8 max-w-6xl h-[90vh]">
        <div className="bg-white rounded-lg shadow-lg h-full flex overflow-hidden">
          {/* Sidebar with chat list */}
          <div className="w-1/3 border-r">
            <ChatList
              onSelectChat={setSelectedChat}
              selectedChat={selectedChat}
            />
          </div>
          {/* Main chat window */}
          <div className="flex-1">
            <ChatWindow chat={selectedChat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;