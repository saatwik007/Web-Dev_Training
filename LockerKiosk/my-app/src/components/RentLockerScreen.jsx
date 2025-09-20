import React from 'react'

const RentLockerScreen = (onBack) => {

    const lockers = Array.from({ length: 15 }, (_, idx) => ({
  id: idx + 1,
  occupied: [2, 5, 7, 12].includes(idx + 1), // 2,5,7,12 are occupied (red)
}));

  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#141726] via-[#1a1831] to-[#19132c]">
      <div className="w-full max-w-3xl mb-8 flex items-center">
        <button
          className="mr-4 px-4 py-2 text-white bg-white/10 border border-white/20 rounded hover:bg-white/20 transition"
          onClick={onBack}
        >
          ← Back
        </button>
        <h2 className="text-3xl font-semibold text-white drop-shadow tracking-tight">
          Rent a Locker
        </h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-3xl">
        {lockers.map((locker) => (
          <div
            key={locker.id}
            className={`flex flex-col items-center justify-center h-32 rounded-2xl shadow-lg cursor-pointer select-none
              ${locker.occupied ? "bg-red-600/80" : "bg-green-600/80"}
              text-white text-xl font-bold border-2 border-white/20 transition hover:scale-105`}
          >
            Locker {locker.id}
            <span className="text-sm font-normal mt-1">
              {locker.occupied ? "Occupied" : "Available"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RentLockerScreen