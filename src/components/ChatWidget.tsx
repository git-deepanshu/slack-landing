import React, { useState } from "react";
import { X, Waves as Wave } from "lucide-react";

const ChatWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 right-4 w-[300px] z-40">
      <div className="flex items-center gap-1">
        <div className="flex-1 bg-white rounded-lg shadow-xl p-4 pl-7">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 left-0 text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
          <p className="text-gray-600 text-sm">
            Hery there, want to know something cool !?
          </p>
        </div>
        <button className="w- h-10 flex items-center justify-center text-4xl">
          👋
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
