import React from 'react'

function Timer({ time, sessionType }) {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-gradient-to-br from-red-400 to-red-600 flex flex-col items-center w-96 h-64 rounded-2xl shadow-2xl p-4'>

                {/* Session indicators */}
                <div className='flex justify-between w-full mb-6'>
                    {/* Current session - more prominent */}
                    <span className='bg-white text-red-600 px-3 py-1 rounded-lg font-bold text-sm shadow-lg'>
                        {sessionType}
                    </span>

                    {/* Next session - subtle */}
                    <span className='bg-red-700/50 text-white px-3 py-1 rounded-lg font-semibold text-sm'>
                        {sessionType === 'Work' ? 'Break Next' : 'Work Next'}
                    </span>
                </div>

                {/* Timer */}
                <p className='text-white text-8xl font-bold drop-shadow-2xl flex items-center'>
                    {time}
                </p>

            </div>
        </div>
    )
}

export default Timer
