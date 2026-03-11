import { useState } from "react";

export function PomodoroTimer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isWorkSession, setIsWorkSession] = useState(true);

  const startTimer = () => {
        if (intervalId) return;
        const start = Date.now() - elapsedTime;
        setStartTime(start);
        setIntervalId(
  };

  const stopTimer = () => {
  };

  return {
    isWorkSession,
    startTimer,
    stopTimer,
  };
}
