import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen({ onNavigate }) {
  const navigate = useNavigate();
  return (
 <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#141726] via-[#1a1831] to-[#19132c]">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white drop-shadow-lg tracking-tight select-none">
        Auto Locker Selector
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center">
        {/* Open Locker Tile */}
        <button
          className="flex-1 px-10 py-12 bg-white/10 border border-white/20 rounded-2xl shadow-xl
                     backdrop-blur-sm transition hover:bg-white/20 hover:scale-[1.03] 
                     flex flex-col items-center
                     focus:outline-none"
          onClick={() => onNavigate("open")}
        >
          <span className="text-2xl md:text-3xl font-semibold text-white mb-2">Open Your Locker</span>
          <span className="text-base text-white/70">Access an existing locker !!!</span>
        </button>
        {/* Rent Locker Tile */}
        <button
          className="flex-1 px-10 py-12 bg-white/10 border border-white/20 rounded-2xl shadow-xl
                     backdrop-blur-sm transition hover:bg-white/20 hover:scale-[1.03] 
                     flex flex-col items-center
                     focus:outline-none"
          onClick={() => navigate("/rent")}
        >
          <span className="text-2xl md:text-3xl font-semibold text-white mb-2">Rent a New Locker</span>
          <span className="text-base text-white/70">Get a new locker instantly</span>
        </button>
      </div>
    </div>
  );
}