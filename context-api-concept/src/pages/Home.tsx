import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Type } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        React Concepts Demo
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/dropdown"
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Dropdown Demo</h2>
          </div>
          <p className="text-gray-600">
            Explore state management and context with an interactive dropdown component.
          </p>
        </Link>

        <Link
          to="/text-input"
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-4">
            <Type className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">Text Input Demo</h2>
          </div>
          <p className="text-gray-600">
            Learn about event handling and state updates with a text input component.
          </p>
        </Link>
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Concepts Covered:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>React Router for navigation</li>
          <li>Context API for theme management</li>
          <li>State management with useState hook</li>
          <li>Event handling (keyboard and click events)</li>
          <li>Component composition and reusability</li>
        </ul>
      </div>
    </div>
  );
}