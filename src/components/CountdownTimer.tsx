import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a fixed target date - January 15, 2025 at 12:00 PM UTC
    // You can change this date to your actual launch date
    const targetDate = new Date('2025-01-15T12:00:00Z').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // If the countdown has finished, show zeros
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0');
  };

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-2 min-w-[80px] md:min-w-[100px] border border-white/20">
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tabular-nums transition-all duration-500 ease-in-out">
          {formatTime(value)}
        </div>
      </div>
      <div className="text-sm md:text-base text-white/80 font-semibold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-4xl md:text-6xl text-white/60 self-start mt-4 md:mt-6">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-4xl md:text-6xl text-white/60 self-start mt-4 md:mt-6">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-4xl md:text-6xl text-white/60 self-start mt-4 md:mt-6">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;