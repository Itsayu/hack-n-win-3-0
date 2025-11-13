import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date('2026-03-07T00:00:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-28 md:h-28 bg-black dark:bg-white text-white dark:text-black rounded-lg md:rounded-xl flex items-center justify-center border-4 border-red-600 shadow-lg">
        <span className="text-2xl md:text-5xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-sm md:text-base font-semibold text-black dark:text-white mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="py-8 md:py-16">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-black dark:text-white">
        Hackathon Starts In
      </h2>
      <div className="flex justify-center items-center gap-2 md:gap-6">
        <TimeBox value={timeLeft.days} label="Days" />
        <span className="text-2xl md:text-6xl font-bold text-red-600 mb-6">:</span>
        <TimeBox value={timeLeft.hours} label="Hours" />
        <span className="text-2xl md:text-6xl font-bold text-red-600 mb-6">:</span>
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <span className="text-2xl md:text-6xl font-bold text-red-600 mb-6">:</span>
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
