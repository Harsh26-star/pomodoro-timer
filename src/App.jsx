import { useEffect, useState } from 'react'
import Timer from './components/Timer';

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
    };
  }, [isRunning, sessionType, workDuration, breakDuration]);

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
        <div>
          <button
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
        </div>
        <Timer
          time={formatTime(timeRemaining)}
          sessionType={sessionType}
        />
      </div>
    </>
  )
}

export default App
