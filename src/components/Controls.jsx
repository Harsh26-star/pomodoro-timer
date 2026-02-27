import React from 'react'

function Controls({ isRunning, onStartPause, onReset, onSkip }) {
  return (
    <div className="flex justify-around items-center gap-4 py-8 w-full">
      <button
        onClick={onStartPause}
        className={`px-6 py-3 text-lg font-semibold rounded-2xl transition-all duration-200 active:scale-95 shadow-lg ${isRunning
          ? 'bg-amber-400 hover:bg-amber-500 text-slate-900'
          : 'bg-emerald-500 hover:bg-emerald-600 text-white'
          }`}>{isRunning ? 'Pause' : 'Start'}</button>
      <div className="flex gap-3">
        <button
          onClick={onReset}
          className="px-4 py-2 text-sm font-medium bg-slate-700 text-slate-200 hover:bg-slate-600 transition-all duration-200 active:scale-95 rounded-xl "
          >Reset</button>
        <button
          onClick={onSkip}
          className="px-4 py-2 text-sm font-medium  rounded-xl bg-rose-600/80 text-white hover:bg-rose-600 transition-all duration-200 active:scale-95">Skip</button>
      </div>
    </div>
  )
}

export default Controls
