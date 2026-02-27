function Timer({ time, sessionType }) {
  return (
    <div className='bg-gradient-to-r from-red-600 to-rose-700 flex flex-col items-center w-full h-auto rounded-2xl shadow-2xl p-4 md:p-6'>
      {/* Session indicators */}
      <div className='flex justify-between w-full mb-4 md:mb-6'>
        <span className='bg-white text-red-600 px-2 py-1 md:px-3 md:py-1 rounded-lg font-bold text-xs md:text-sm shadow-lg'>
          {sessionType}
        </span>
        
        <span className='bg-red-700/50 text-white px-2 py-1 md:px-3 md:py-1 rounded-lg font-semibold text-xs md:text-sm border border-white/20'>
          {sessionType === 'Work' ? 'Break Next' : 'Work Next'}
        </span>
      </div>
      
      {/* Timer */}
      <p className='text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold drop-shadow-2xl flex items-center my-4 md:my-8'>
        {time}
      </p>
    </div>
  );
}

export default Timer;