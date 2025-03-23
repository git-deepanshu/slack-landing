import React, { useState } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    console.log("Cookies accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    console.log("Cookies declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-[300px] bg-white rounded-lg shadow-xl p-7 z-40">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={16} />
      </button>
      <p className="text-sm text-gray-600 mb-4">
        This website uses cookies to enhance your browsing experience, analyze
        site traffic, and provide personalized content. By clicking 'Accept,'
        you consent to our use of cookies. You can manage your preferences or
        learn more in our{" "}
      </p>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleAccept}
          className="flex-1 px-4 py-2 bg-[#611E67] text-white rounded-md hover:bg-[#4A1751] transition-colors text-sm"
        >
          Accept All Cookies
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
        >
          Decline All
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
