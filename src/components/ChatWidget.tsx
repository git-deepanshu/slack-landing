import React, { useState } from 'react';
import { X, Waves as Wave } from 'lucide-react';

const ChatWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 right-4 w-[300px] z-40">
      <div className="flex items-start gap-2">
        <div className="flex-1 bg-white rounded-lg shadow-xl p-4">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
          <p className="text-lg font-medium mb-2">Need help?</p>
          <p className="text-gray-600">Chat with us!</p>
        </div>
        <button
          className="w-10 h-10 bg-[#611E67] text-white rounded-full flex items-center justify-center hover:bg-[#4A1751] transition-colors"
        >
          <Wave size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;