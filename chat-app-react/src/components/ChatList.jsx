import { useState } from 'react';
import { format } from 'date-fns';
import { PlusIcon } from '@heroicons/react/24/solid';

const initialChats = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    time: new Date(),
    unread: 2,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Let's meet tomorrow",
    time: new Date(),
    unread: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
  }
];

export default function ChatList({ onSelectChat, selectedChat }) {
  const [chats, setChats] = useState(initialChats);
  const [showNewChatInput, setShowNewChatInput] = useState(false);
  const [newChatName, setNewChatName] = useState('');

  const handleAddNewChat = (e) => {
    e.preventDefault();
    if (newChatName.trim()) {
      const newChat = {
        id: chats.length + 1,
        name: newChatName,
        lastMessage: "Start a conversation",
        time: new Date(),
        unread: 0,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newChatName}`
      };
      setChats([newChat, ...chats]);
      setNewChatName('');
      setShowNewChatInput(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* New Chat Button and Input */}
      <div className="p-4 border-b">
        {showNewChatInput ? (
          <form onSubmit={handleAddNewChat} className="flex gap-2">
            <input
              type="text"
              value={newChatName}
              onChange={(e) => setNewChatName(e.target.value)}
              placeholder="Enter contact name"
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Add
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowNewChatInput(true)}
            className="flex items-center gap-2 w-full px-4 py-2 text-green-600 hover:bg-gray-100 rounded-lg"
          >
            <PlusIcon className="w-5 h-5" />
            <span>New Chat</span>
          </button>
        )}
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
              selectedChat?.id === chat.id ? 'bg-gray-100' : ''
            }`}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{chat.name}</h3>
                <span className="text-xs text-gray-500">
                  {format(chat.time, 'HH:mm')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}