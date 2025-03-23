import React from "react";

const Features = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-black mb-6">
              Now is your moment to build a better tomorrow.
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              We've seen what the future can be, now it's time to decide what it
              can be
            </p>
            <a
              href="/learn-more"
              className="hidden md:inline-block px-4 py-2 border border-[#611E67] text-[#611E67] rounded-md hover:bg-[#611E67] hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
