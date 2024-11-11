"use client";

// components/TextInput.js
export default function TextInput() {
    return (
      <div className="flex flex-col p-4 space-y-2">
        <label className="text-lg font-medium text-gray-700">Text Input</label>
        <input
          type="text"
          placeholder="Type your message..."
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  