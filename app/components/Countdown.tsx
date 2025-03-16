"use client";
import React, { useState, useEffect } from "react";

interface CountdownDuration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2025-03-17T03:30:00Z"); // Ensure UTC

  const getRemainingTime = (): CountdownDuration => {
    const now = new Date().toISOString(); // Ensure UTC
    const remainingTime = Math.max(0, targetDate.getTime() - new Date(now).getTime());

    return {
      days: Math.floor(remainingTime / 86400000),
      hours: Math.floor((remainingTime % 86400000) / 3600000),
      minutes: Math.floor((remainingTime % 3600000) / 60000),
      seconds: Math.floor((remainingTime % 60000) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownDuration>(getRemainingTime());

  useEffect(() => {
    console.log("Local Time:", new Date().toString());
    console.log("UTC Time:", new Date().toUTCString());
    console.log("Target Date UTC:", targetDate.toUTCString());

    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": value } as React.CSSProperties}></span>
          </span>
          {unit}
        </div>
      ))}
    </div>
  );
};

export default Countdown;
