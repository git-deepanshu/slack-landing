import React from "react";
import google from "../assets/google_icon.png";

const Hero = () => {
  return (
    <div className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Slack is where the future works
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/signup"
                className="inline-flex justify-center items-center px-6 py-3 bg-[#611E67] text-white rounded-md hover:bg-[#4A1751] transition-colors"
              >
                Try for Free
              </a>
              <a
                href="/google-signin"
                className="inline-flex justify-center items-center px-6 py-3 bg-[#2D85EE] text-white rounded-md hover:bg-[#2468B8] transition-colors"
              >
                <img
                  src="/src/assets/google_icon.png"
                  alt="Google"
                  className="w-5 h-5 mr-2 p-1 bg-white rounded-sm"
                />{" "}
                Sign in with Google
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Slack workspace"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
