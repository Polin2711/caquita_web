import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import ActionButtons from './components/ActionButtons';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-orange-500 rounded-full filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-6 tracking-tight">
            💩 SHITRICH 💵
          </h1>
          <p className="text-lg md:text-xl text-yellow-400/90 font-bold italic">
            "The 3 P's: Poop. Profit. Paradise."
          </p>
        </div>

        {/* Mascot image */}
        <div className="mb-12 animate-fade-in-up animation-delay-500 flex justify-center">
          <div className="scale-125 md:scale-150">
            <img 
              src="/mascot.png" 
              alt="ShitRich Mascot" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl animate-bounce-slow"
            />
          </div>
        </div>

        {/* Launch countdown */}
        <div className="mb-8 animate-fade-in-up animation-delay-1000">
          <h2 className="text-2xl md:text-3xl text-white/90 font-bold mb-8 tracking-wide">
            LAUNCHING IN...
          </h2>
          <CountdownTimer />
        </div>

        {/* Action buttons */}
        <div className="mb-8 animate-fade-in-up animation-delay-1500 flex justify-center">
          <ActionButtons />
        </div>

        {/* Footer text */}
        <div className="text-white/60 text-sm md:text-base animate-fade-in-up animation-delay-2000">
          <p>💩 today, billionaire tomorrow.</p>
          <p className="mt-2">© 2024 ShitRich! • All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;