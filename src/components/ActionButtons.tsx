import React from 'react';
import { TrendingUp, FileText, Rocket } from 'lucide-react';

const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
      <button className="group w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 flex items-center justify-center gap-3 min-w-[160px]">
        <Rocket className="w-5 h-5 group-hover:animate-pulse" />
        <span className="text-base">GET RICH NOW!</span>
      </button>
      
      <button className="group w-full sm:w-auto bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:bg-blue-500/10 flex items-center justify-center gap-3 min-w-[160px]">
        <FileText className="w-5 h-5 group-hover:animate-pulse" />
        <span className="text-base">READ DOCS</span>
      </button>
    </div>
  );
};

export default ActionButtons;