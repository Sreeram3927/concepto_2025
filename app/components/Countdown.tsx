"use client";
import React, { useState, useEffect } from 'react';

interface CountdownDuration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date('2025-03-17T00:00:00Z'); // Set the target date and time (UTC)

  const getRemainingTime = (): CountdownDuration => {
    const now = Date.now();
    const remainingTime = Math.max(0, targetDate.getTime() - now);
    
    return {
      days: Math.floor(remainingTime / 86400000),
      hours: Math.floor((remainingTime % 86400000) / 3600000),
      minutes: Math.floor((remainingTime % 3600000) / 60000),
      seconds: Math.floor((remainingTime % 60000) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownDuration>(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const remainingTime = getRemainingTime();
        if (remainingTime.days <= 0 && remainingTime.hours <= 0 && remainingTime.minutes <= 0 && remainingTime.seconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return remainingTime;
      });
    }, 1000);

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
