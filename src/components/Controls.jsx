import React from 'react'

function Controls({ isRunning, onStartPause, onReset, onSkip }) {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-3 md:gap-4 py-6 md:py-8 w-full px-4">
      <button
        onClick={onStartPause}
        className={`w-full sm:w-auto
          px-8 md:px-10 py-3 md:py-4 
          text-base md:text-lg 
          font-semibold
          rounded-2xl 
          transition
          shadow-lg ${isRunning
            ? 'bg-amber-400 hover:bg-amber-500 text-slate-900'
            : 'bg-emerald-500 hover:bg-emerald-600 text-white'
          }`}>{isRunning ? 'Pause' : 'Start'}
      </button>
      <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
        <button
          onClick={onReset}
          className="flex-1 sm:flex-none px-4 md:px-5 py-2 md:py-3 text-sm md:text-base font-semibold bg-rose-600/80 text-white hover:bg-rose-600 transition-all duration-200 active:scale-95 rounded-xl "
        >Reset</button>
        <button
          onClick={onSkip}
          className="flex-1 sm:flex-none px-4 md:px-5 py-2 md:py-3 text-sm md:text-base font-semibold  rounded-xl bg-slate-700 text-slate-200 hover:bg-slate-600 transition-all duration-200 active:scale-95">Skip</button>
      </div>
    </div>
  )
}

export default Controls
