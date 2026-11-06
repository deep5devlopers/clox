/* -------------------------------------------------------------------------- */
/* © 2026 Deep Systems · Autonomous Engineering Ecosystem                     */
/* Principal Architect: Deep Sanchaniya (@deep-00007 / @deep5devlopers)       */
/* -------------------------------------------------------------------------- */

import React, { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clox-container">
      <h2>Current Time</h2>
      <div className="time-display">{time.toLocaleTimeString()}</div>
    </div>
  );
};
