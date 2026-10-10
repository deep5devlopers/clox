import React, { useState, useEffect } from 'react';

export const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    activeVessels: 4,
    yardCapacityPercent: 78.4,
    activeCranes: 12,
    totalContainersHandled: 14280,
    quayThroughputTeuHr: 342
  });

  const [vessels, setVessels] = useState([
    { id: 'VES-802', name: 'Ever Golden', eta: '10:45 AM', berth: 'Quay 4A', status: 'Moored', teu: 20100 },
    { id: 'VES-914', name: 'Maersk Mc-Kinney', eta: '01:15 PM', berth: 'Quay 2B', status: 'In Approach', teu: 18270 },
    { id: 'VES-431', name: 'CMA CGM Palais', eta: '04:30 PM', berth: 'Quay 1A', status: 'Scheduled', teu: 15000 },
    { id: 'VES-229', name: 'Hapag-Lloyd Express', eta: '08:00 PM', berth: 'Quay 3C', status: 'Scheduled', teu: 13500 }
  ]);

  const [cranes, setCranes] = useState([
    { id: 'STS-01', type: 'Super Post-Panamax', efficiency: '96%', operationalStatus: 'ACTIVE', liftsPerHr: 36 },
    { id: 'STS-02', type: 'Super Post-Panamax', efficiency: '94%', operationalStatus: 'ACTIVE', liftsPerHr: 34 },
    { id: 'STS-03', type: 'Post-Panamax', efficiency: '89%', operationalStatus: 'CALIBRATING', liftsPerHr: 28 },
    { id: 'STS-04', type: 'Super Post-Panamax', efficiency: '98%', operationalStatus: 'ACTIVE', liftsPerHr: 38 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        quayThroughputTeuHr: Math.floor(330 + Math.random() * 25),
        totalContainersHandled: prev.totalContainersHandled + Math.floor(Math.random() * 3)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-dashboard-container" style={{ padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '700', color: '#38bdf8' }}>🚢 Maritime Port Terminal Logistics Matrix</h1>
          <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '14px' }}>Live Quay Operations, Container Yard Telemetry & Vessel Dispatch</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ padding: '6px 12px', borderRadius: '4px', background: '#0284c7', color: '#fff', fontSize: '13px', fontWeight: '600' }}>PORT ACTIVE</span>
          <span style={{ padding: '6px 12px', borderRadius: '4px', background: '#1e293b', border: '1px solid #475569', color: '#94a3b8', fontSize: '13px' }}>ZONE-A BERTH</span>
        </div>
      </header>

      {/* KPI Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Active Vessels In Port</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#38bdf8', marginTop: '6px' }}>{metrics.activeVessels}</div>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Yard Capacity Utilization</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#f59e0b', marginTop: '6px' }}>{metrics.yardCapacityPercent}%</div>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>STS Quay Cranes Online</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981', marginTop: '6px' }}>{metrics.activeCranes} / 14</div>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Throughput (TEU/hr)</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#818cf8', marginTop: '6px' }}>{metrics.quayThroughputTeuHr}</div>
        </div>
      </div>

      {/* Vessel Schedule Matrix */}
      <section style={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155', padding: '20px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', margin: '0 0 16px', color: '#f1f5f9' }}>Vessel Berthing & Arrival Telemetry</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
              <th style={{ padding: '8px 12px' }}>Call ID</th>
              <th style={{ padding: '8px 12px' }}>Vessel Name</th>
              <th style={{ padding: '8px 12px' }}>Target Berth</th>
              <th style={{ padding: '8px 12px' }}>ETA / Status</th>
              <th style={{ padding: '8px 12px' }}>Capacity (TEU)</th>
            </tr>
          </thead>
          <tbody>
            {vessels.map(v => (
              <tr key={v.id} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: '#38bdf8' }}>{v.id}</td>
                <td style={{ padding: '10px 12px', fontWeight: '600' }}>{v.name}</td>
                <td style={{ padding: '10px 12px' }}>{v.berth}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: v.status === 'Moored' ? '#065f46' : v.status === 'In Approach' ? '#1e40af' : '#374151',
                    color: '#fff'
                  }}>
                    {v.status} ({v.eta})
                  </span>
                </td>
                <td style={{ padding: '10px 12px' }}>{v.teu.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Crane Telemetry */}
      <section style={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155', padding: '20px' }}>
        <h2 style={{ fontSize: '18px', margin: '0 0 16px', color: '#f1f5f9' }}>Active STS Crane Status & Telemetry</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {cranes.map(crane => (
            <div key={crane.id} style={{ backgroundColor: '#0f172a', padding: '16px', borderRadius: '6px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <strong style={{ color: '#38bdf8' }}>{crane.id}</strong>
                <span style={{ fontSize: '12px', color: crane.operationalStatus === 'ACTIVE' ? '#10b981' : '#f59e0b' }}>
                  {crane.operationalStatus}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '4px' }}>Type: {crane.type}</div>
              <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '4px' }}>Cycle Efficiency: <span style={{ color: '#f8fafc' }}>{crane.efficiency}</span></div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>Lifts: <span style={{ color: '#f8fafc' }}>{crane.liftsPerHr} cycles/hr</span></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
