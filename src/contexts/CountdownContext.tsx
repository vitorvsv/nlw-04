import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export const CountdownContext = createContext({} as CountdownContextData); 

let countdownTimeout: NodeJS.Timeout;
const MAX_TIME = 60 * 0.1;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const[time, setTime] = useState(MAX_TIME);
  const[isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCoutdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(MAX_TIME);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider 
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCoutdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

interface CountdownProviderProps {
  children: ReactNode
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCoutdown: () => void;
}