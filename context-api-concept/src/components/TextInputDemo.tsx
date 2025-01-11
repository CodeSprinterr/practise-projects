import React, { useState, KeyboardEvent } from 'react';

export default function TextInputDemo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text.trim()) {
      setItems(prev => [...prev, text.trim()]);
      setText('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Text (Press Enter to Add)
        </label>
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type and press Enter..."
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Added Items:</h3>
        {items.length === 0 ? (
          <p className="text-gray-500">No items added yet</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="px-3 py-2 bg-gray-50 rounded-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}