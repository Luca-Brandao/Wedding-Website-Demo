import { useEffect, useState } from "react";

export function useCountdown(targetDate: string) {
  const calculate = () => {
    const distance = new Date(targetDate).getTime() - Date.now();
    const safeDistance = Math.max(distance, 0);

    return {
      days: Math.floor(safeDistance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((safeDistance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((safeDistance / (1000 * 60)) % 60),
      seconds: Math.floor((safeDistance / 1000) % 60)
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const id = window.setInterval(() => setTime(calculate()), 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  return time;
}
