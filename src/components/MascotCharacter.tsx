import React from 'react';

const MascotCharacter: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center animate-bounce-slow">
      {/* Main body */}
      <div className="relative">
        {/* Poop body */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full relative">
          {/* Top swirl */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
          
          {/* Eyes */}
          <div className="absolute top-8 left-6 w-3 h-4 bg-black rounded-full"></div>
          <div className="absolute top-8 right-6 w-3 h-4 bg-black rounded-full"></div>
          
          {/* Eyebrows */}
          <div className="absolute top-6 left-6 w-4 h-1 bg-black rounded-full transform -rotate-12"></div>
          <div className="absolute top-6 right-6 w-4 h-1 bg-black rounded-full transform rotate-12"></div>
          
          {/* Smile */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-black rounded-full"></div>
          
          {/* Left arm */}
          <div className="absolute top-12 -left-6 w-12 h-6 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full transform -rotate-12"></div>
          
          {/* Right arm holding coin */}
          <div className="absolute top-8 -right-8 w-16 h-6 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full transform rotate-12"></div>
          
          {/* Left leg */}
          <div className="absolute bottom-2 left-4 w-6 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full transform rotate-12"></div>
          
          {/* Right leg */}
          <div className="absolute bottom-2 right-4 w-6 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full transform -rotate-12"></div>
          
          {/* Left foot */}
          <div className="absolute bottom-0 left-2 w-8 h-4 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full"></div>
          
          {/* Right foot */}
          <div className="absolute bottom-0 right-2 w-8 h-4 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full"></div>
        </div>
        
        {/* Dollar coin */}
        <div className="absolute -top-2 -right-12 w-12 h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-300 flex items-center justify-center animate-spin-slow">
          <span className="text-yellow-900 text-xl font-bold">$</span>
        </div>
      </div>
    </div>
  );
};

export default MascotCharacter;