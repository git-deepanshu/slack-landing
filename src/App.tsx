import React from 'react';
import Header from './components/Header';
import Notification from './components/Notification';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import CookieConsent from './components/CookieConsent';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Notification />
      <main>
        <Hero />
        <Brands />
        <Features />
      </main>
      <CookieConsent />
      <ChatWidget />
    </div>
  );
}

export default App;