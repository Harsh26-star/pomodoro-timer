import { useEffect, useState } from 'react'
import Timer from './components/Timer';
import Controls from './components/Controls';

function App() {
  // Timer States
  const [timeRemaining, setTimeRemaining] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState('Work');

  // Duration States
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const remainingSeconds = seconds % 60;
    const paddedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${paddedMinutes}:${paddedSeconds}`;
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            const newSessionType = sessionType === 'Work' ? 'Break' : 'Work';
            setSessionType(newSessionType);

            return newSessionType === 'Work'
              ? workDuration * 60
              : breakDuration * 60;
          }

          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, sessionType, workDuration, breakDuration]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  }

  const handleReset = () => {
    setIsRunning(false);
    setTimeRemaining(sessionType === 'Work' ? workDuration * 60 : breakDuration * 60)
  }

  const handleSkip = () => {
    const newSessionType = sessionType === 'Work' ? 'Break' : 'Work';
    setSessionType(newSessionType);
    setIsRunning(false)
    setTimeRemaining(newSessionType === 'Work' ? workDuration * 60 : breakDuration * 60);
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 overflow-x-hidden p-4'>
      <div className='flex flex-col justify-center items-center bg-slate-800/60 backdrop-blur-xl border border-slate-700 p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl max-w-md w-full'>
        <Timer
          time={formatTime(timeRemaining)}
          sessionType={sessionType}
        />
        <Controls
          isRunning={isRunning}
          onStartPause={handleStartPause}
          onReset={handleReset}
          onSkip={handleSkip}
        />
      </div>
    </div>
  )
}

export default App