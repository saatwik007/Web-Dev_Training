import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#0a1121] to-[#010314] flex flex-col items-center py-12 px-4 font-inter">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-between gap-12 relative">
        
        <div className="flex-1">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Level Up Your Coding Skills — <br />One Mission at a Time
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="bg-white text-blue-400 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform">
              Browse Courses
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center relative">
          {/* Replace src with your own illustration file */}
          <Image src="/coding-illustration.png" alt="Level Up" width={280} height={280} />
          <div className="absolute top-6 right-8 bg-white bg-opacity-30 rounded-full px-6 py-4 text-white font-bold text-lg shadow-xl backdrop-blur-sm flex flex-col items-center">
            <span>XP</span>
            <span className="text-2xl">350</span>
          </div>
        </div>
      </div>

      {/* Progress Map */}
      {/* <div className="w-full max-w-4xl mt-16 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Gamified Progress Map</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgressCard title="Beginner Forest" levels={["unlocked", "locked"]} />
          <ProgressCard title="Intermediate City" levels={["locked", "locked"]} />
          <ProgressCard title="Advanced @GBiaxy" levels={["locked"]} />
        </div>
      </div> */}

      {/* Learn by Doing */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-white mb-4">Learn by Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-15 rounded-2xl p-6 shadow-lg flex flex-col gap-2">
            <div className="bg-gray-800 text-blue-300 rounded-lg p-2 font-mono text-sm mb-2">print(&quot;Welcome to CodeQuest!&quot;)</div>
            <div className="text-white font-medium">Welcome to CodeQuest!</div>
          </div>
          <div className="bg-teal-400 text-white rounded-2xl p-6 shadow-lg flex flex-col gap-2">
            <div className="font-bold text-lg">Unlock Badges</div>
            <div className="text-sm">For Completing</div>
          </div>
          <div className="bg-indigo-500 text-white rounded-2xl p-6 shadow-lg flex flex-col gap-2">
            <div className="font-bold text-lg">Compete</div>
            <div className="text-sm">on the Leaderboard</div>
          </div>
          <div className="bg-orange-400 text-white rounded-2xl p-6 shadow-lg flex flex-col gap-2">
            <div className="font-bold text-lg">Complete Projects</div>
            <div className="text-sm">to Advance to Next Level!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ProgressCard component for map section
// function ProgressCard({ title, levels }) {
//   return (
//     <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col items-center transition-all duration-200">
//       <div className="font-bold text-white mb-4">{title}</div>
//       <div className="flex gap-4">
//         {levels.map((status, idx) => (
//           <div key={idx} className="flex flex-col items-center">
//             <div className={`w-12 h-12 rounded-full flex items-center justify-center
//               ${status === "locked" ? "bg-blue-800" : "bg-teal-400"} text-white text-2xl`}>
//               {status === "locked" ? "🔒" : "🟢"}
//             </div>
//             <span className="text-xs text-blue-200 mt-1">Level {idx + 1}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }