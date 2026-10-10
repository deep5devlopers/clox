import React, { useState } from 'react';

export const YardStackOptimizer = () => {
  const [bays, setBays] = useState([
    { bayId: 'BAY-01A', tierDepth: 5, maxSlots: 30, occupied: 26, hazardousCount: 2, temperatureControlled: false },
    { bayId: 'BAY-01B', tierDepth: 5, maxSlots: 30, occupied: 21, hazardousCount: 0, temperatureControlled: false },
    { bayId: 'BAY-02-REEFER', tierDepth: 4, maxSlots: 24, occupied: 22, hazardousCount: 0, temperatureControlled: true },
    { bayId: 'BAY-03-HAZMAT', tierDepth: 3, maxSlots: 18, occupied: 12, hazardousCount: 12, temperatureControlled: false }
  ]);

  const [selectedBay, setSelectedBay] = useState(bays[0]);

  return (
    <div className="yard-stack-optimizer" style={{ padding: '20px', backgroundColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }}>
      <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: '#38bdf8' }}>Yard Bay Slot Allocation & Crane Shift Optimization</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '20px' }}>
        {bays.map(b => {
          const utilRate = Math.round((b.occupied / b.maxSlots) * 100);
          return (
            <div
              key={b.bayId}
              onClick={() => setSelectedBay(b)}
              style={{
                padding: '12px',
                borderRadius: '6px',
                backgroundColor: selectedBay.bayId === b.bayId ? '#0f172a' : '#1e293b',
                border: selectedBay.bayId === b.bayId ? '2px solid #38bdf8' : '1px solid #334155',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#e2e8f0' }}>{b.bayId}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0' }}>Capacity: {b.occupied}/{b.maxSlots} TEU ({utilRate}%)</div>
              <div style={{ height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${utilRate}%`, height: '100%', background: utilRate > 85 ? '#ef4444' : '#10b981' }} />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ backgroundColor: '#0f172a', padding: '16px', borderRadius: '6px', border: '1px solid #334155' }}>
        <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#93c5fd' }}>Slot Placement Telemetry: {selectedBay.bayId}</h4>
        <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#94a3b8' }}>
          <div>Stacking Tiers: <strong style={{ color: '#fff' }}>{selectedBay.tierDepth} High</strong></div>
          <div>Hazardous Cargo Units: <strong style={{ color: '#fff' }}>{selectedBay.hazardousCount}</strong></div>
          <div>Reefer Plugs Active: <strong style={{ color: '#fff' }}>{selectedBay.temperatureControlled ? 'Enabled' : 'N/A'}</strong></div>
          <div>Automated RTG Crane Ready: <strong style={{ color: '#10b981' }}>YES</strong></div>
        </div>
      </div>
    </div>
  );
};

export default YardStackOptimizer;
