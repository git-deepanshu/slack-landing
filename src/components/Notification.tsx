import React, { useState } from "react";
import { X } from "lucide-react";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="absolute top-20 left-0 right-0 z-40 flex justify-center">
      <div className="bg-[#0064A0] rounded-full max-w-[90rem] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex-1 flex items-center">
            <p className="text-white">
              Slack in your digital HQ. Meet the new features keeping teams
              connected in a work-from-anywhere world.{" "}
              <a href="#features" className="underline hover:no-underline">
                Let's go
              </a>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-white hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
