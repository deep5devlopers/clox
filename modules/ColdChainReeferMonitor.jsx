import React, { useState, useEffect } from 'react';

export const ColdChainReeferMonitor = () => {
  const [reefers, setReefers] = useState([
    { containerId: 'RF-90412', commodity: 'Pharmaceuticals', setPointC: -20.0, currentTempC: -19.8, powerKw: 4.2, alarmState: 'NORMAL' },
    { containerId: 'RF-90413', commodity: 'Fresh Citrus', setPointC: 3.5, currentTempC: 3.6, powerKw: 3.1, alarmState: 'NORMAL' },
    { containerId: 'RF-90414', commodity: 'Frozen Salmon', setPointC: -25.0, currentTempC: -21.4, powerKw: 5.8, alarmState: 'HIGH_TEMP_WARN' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setReefers(prev => prev.map(r => ({
        ...r,
        currentTempC: +(r.setPointC + (Math.random() * 0.4 - 0.2)).toFixed(1)
      })));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cold-chain-reefer-monitor" style={{ padding: '20px', backgroundColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }}>
      <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: '#38bdf8' }}>Refrigerated Cargo Telemetry & Power Sensor Monitor</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
            <th style={{ padding: '8px' }}>Reefer Unit</th>
            <th style={{ padding: '8px' }}>Cargo Commodity</th>
            <th style={{ padding: '8px' }}>Set-Point Temp</th>
            <th style={{ padding: '8px' }}>Current Telemetry</th>
            <th style={{ padding: '8px' }}>Compressor Load</th>
            <th style={{ padding: '8px' }}>Alarm State</th>
          </tr>
        </thead>
        <tbody>
          {reefers.map(rf => (
            <tr key={rf.containerId} style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', color: '#38bdf8' }}>{rf.containerId}</td>
              <td style={{ padding: '8px' }}>{rf.commodity}</td>
              <td style={{ padding: '8px' }}>{rf.setPointC}°C</td>
              <td style={{ padding: '8px', fontWeight: 'bold', color: Math.abs(rf.currentTempC - rf.setPointC) > 2 ? '#ef4444' : '#10b981' }}>
                {rf.currentTempC}°C
              </td>
              <td style={{ padding: '8px' }}>{rf.powerKw} kW</td>
              <td style={{ padding: '8px' }}>
                <span style={{
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  backgroundColor: rf.alarmState === 'NORMAL' ? '#065f46' : '#991b1b',
                  color: '#fff'
                }}>
                  {rf.alarmState}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColdChainReeferMonitor;
