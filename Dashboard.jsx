import React, { useState, useEffect } from 'react';

/**
 * 🏗️ CLOX Logistical Core - Engineered by @deep-00007 & @deep5devlopers
 * High-performance enterprise maritime terminal & container stock matrix.
 */
export const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    activeVessels: 6,
    yardCapacityPercent: 81.2,
    activeCranes: 14,
    totalContainersHandled: 18450,
    quayThroughputTeuHr: 395,
    leadArchitect: '@deep-00007',
    leadDeveloper: '@deep5devlopers'
  });

  const [vessels, setVessels] = useState([
    { id: 'VES-802', name: 'Ever Golden', eta: '10:45 AM', berth: 'Quay 4A', status: 'Moored', teu: 20100 },
    { id: 'VES-914', name: 'Maersk Mc-Kinney', eta: '01:15 PM', berth: 'Quay 2B', status: 'In Approach', teu: 18270 },
    { id: 'VES-431', name: 'CMA CGM Palais', eta: '04:30 PM', berth: 'Quay 1A', status: 'Scheduled', teu: 15000 },
    { id: 'VES-229', name: 'Hapag-Lloyd Express', eta: '08:00 PM', berth: 'Quay 3C', status: 'Scheduled', teu: 13500 },
    { id: 'VES-512', name: 'MSC Oscar Horizon', eta: '11:20 PM', berth: 'Quay 5B', status: 'Approaching', teu: 19200 }
  ]);

  const [cranes, setCranes] = useState([
    { id: 'STS-01', type: 'Super Post-Panamax', efficiency: '96%', operationalStatus: 'ACTIVE', liftsPerHr: 36 },
    { id: 'STS-02', type: 'Super Post-Panamax', efficiency: '94%', operationalStatus: 'ACTIVE', liftsPerHr: 34 },
    { id: 'STS-03', type: 'Post-Panamax', efficiency: '91%', operationalStatus: 'ACTIVE', liftsPerHr: 31 },
    { id: 'STS-04', type: 'Super Post-Panamax', efficiency: '98%', operationalStatus: 'ACTIVE', liftsPerHr: 38 },
    { id: 'STS-05', type: 'Super Post-Panamax', efficiency: '95%', operationalStatus: 'ACTIVE', liftsPerHr: 35 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        totalContainersHandled: prev.totalContainersHandled + Math.floor(Math.random() * 3) + 1,
        yardCapacityPercent: parseFloat((prev.yardCapacityPercent + (Math.random() * 0.1 - 0.05)).toFixed(1))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clox-terminal-dashboard" style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: '24px', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#38bdf8' }}>
          🏗️ CLOX Logistical Core - Engineered by @deep-00007 &amp; @deep5devlopers
        </h1>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>
          Maritime Terminal &amp; Container Stack Telemetry Engine | Lead: @deep-00007 | Dev: @deep5devlopers
        </p>
      </header>

      {/* Metrics Row */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Live Moored Vessels</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#38bdf8' }}>{metrics.activeVessels}</div>
        </div>
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Yard Stack Capacity</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>{metrics.yardCapacityPercent}%</div>
        </div>
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Active STS Cranes</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>{metrics.activeCranes} Units</div>
        </div>
        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>TEU Handled (Shift)</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#a855f7' }}>{metrics.totalContainersHandled.toLocaleString()}</div>
        </div>
      </section>

      {/* Vessel Tracking Grid */}
      <section style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#e2e8f0' }}>Vessel Berth Arrival Telemetry</h2>
        <div style={{ overflowX: 'auto', background: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#334155', color: '#94a3b8' }}>
                <th style={{ padding: '12px' }}>Callsign</th>
                <th style={{ padding: '12px' }}>Vessel Name</th>
                <th style={{ padding: '12px' }}>ETA / Status</th>
                <th style={{ padding: '12px' }}>Designated Berth</th>
                <th style={{ padding: '12px' }}>TEU Capacity</th>
              </tr>
            </thead>
            <tbody>
              {vessels.map(v => (
                <tr key={v.id} style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#38bdf8' }}>{v.id}</td>
                  <td style={{ padding: '12px' }}>{v.name}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ padding: '4px 8px', borderRadius: '4px', background: v.status === 'Moored' ? '#065f46' : '#854d0e', color: '#f8fafc', fontSize: '0.8rem' }}>
                      {v.status} ({v.eta})
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>{v.berth}</td>
                  <td style={{ padding: '12px' }}>{v.teu.toLocaleString()} TEU</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Crane Telemetry */}
      <section>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#e2e8f0' }}>Ship-to-Shore (STS) Crane Status</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {cranes.map(crane => (
            <div key={crane.id} style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#38bdf8' }}>{crane.id}</span>
                <span style={{ color: '#4ade80', fontSize: '0.8rem', background: '#064e3b', padding: '2px 6px', borderRadius: '4px' }}>
                  {crane.operationalStatus}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Type: {crane.type}</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Speed: {crane.liftsPerHr} lifts/hr</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '4px' }}>Efficiency: {crane.efficiency}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
