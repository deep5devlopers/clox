import React, { useState } from 'react';

/**
 * CLOX Logistical Core & Indoor Navigation Grid
 * Engineered by Deep Sanchaniya (@deep-00007 / @deep5devlopers)
 */
export const Dashboard = () => {
  const [containerId, setContainerId] = useState('CNTR-7704');
  const [grossWeight, setGrossWeight] = useState(420.5);
  const [destinationBay, setDestinationBay] = useState('Bay 12-West');
  const [currentZone, setCurrentZone] = useState('B');
  const [currentAisle, setCurrentAisle] = useState('Aisle B-03');
  const [navigationStatus, setNavigationStatus] = useState('En Route (A* Active)');

  const kpis = [
    { label: 'Active Bays', val: '48 / 50', status: '96.0% Optimal' },
    { label: 'Pallet Stock', val: '1,280 Units', status: 'Nominal' },
    { label: 'Inbound Queue', val: '14 TEU', status: '18.2m Mean Dwell' },
    { label: 'Pick Route Distance', val: '38.4m', status: '-18% vs Baseline' }
  ];

  return (
    <div style={{ background: '#090e17', color: '#f8fafc', padding: '24px', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.15)', paddingBottom: '16px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: '#fff' }}>
          🏗️ CLOX Logistical Core &amp; Indoor Navigation Grid
        </h1>
        <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#94a3b8' }}>
          Engineered by <strong>Deep Sanchaniya</strong> (@deep-00007 / @deep5devlopers) · Real-Time 2D Indoor Wayfinding OS
        </p>
      </header>

      {/* KPI Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
        {kpis.map((k, i) => (
          <div key={i} style={{ background: '#0f172a', border: '1px solid rgba(148, 163, 184, 0.15)', borderRadius: '8px', padding: '14px' }}>
            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'monospace' }}>{k.label}</div>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, margin: '4px 0', color: '#38bdf8', fontFamily: 'monospace' }}>{k.val}</div>
            <div style={{ fontSize: '0.75rem', color: '#10b981' }}>{k.status}</div>
          </div>
        ))}
      </div>

      {/* Active Container & Navigation State */}
      <div style={{ background: '#0f172a', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 12px', color: '#fff' }}>
          Live Container Telemetry &amp; Aisle Routing State
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', fontFamily: 'monospace', fontSize: '0.82rem' }}>
          <div><span style={{ color: '#64748b' }}>Container ID:</span> <span style={{ color: '#fff', fontWeight: 'bold' }}>{containerId}</span></div>
          <div><span style={{ color: '#64748b' }}>Gross Weight:</span> <span style={{ color: '#fff' }}>{grossWeight} kg</span></div>
          <div><span style={{ color: '#64748b' }}>Destination Bay:</span> <span style={{ color: '#38bdf8' }}>{destinationBay}</span></div>
          <div><span style={{ color: '#64748b' }}>Assigned Zone:</span> <span style={{ color: '#a78bfa' }}>Zone {currentZone}</span></div>
          <div><span style={{ color: '#64748b' }}>Current Aisle:</span> <span style={{ color: '#fff' }}>{currentAisle}</span></div>
          <div><span style={{ color: '#64748b' }}>Route Status:</span> <span style={{ color: '#10b981' }}>{navigationStatus}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
