import React, { useState } from 'react';

/**
 * IntermodalRailDispatch.jsx
 * Intermodal freight rail train formation, wagon load weight balance & departure slots.
 * Architecture: @deep-00007 (Lead) | Dev: @deep5devlopers
 */
export const IntermodalRailDispatch = () => {
  const [trains, setTrains] = useState([
    { trainId: 'RAIL-NORTH-04', destination: 'Chicago Inland Depot', wagons: 42, maxTeu: 84, bookedTeu: 82, etd: '14:30', track: 'Spur 3' },
    { trainId: 'RAIL-CENTRAL-09', destination: 'Kansas Logistics Hub', wagons: 36, maxTeu: 72, bookedTeu: 70, etd: '16:45', track: 'Spur 1' },
    { trainId: 'RAIL-EAST-15', destination: 'Atlanta Intermodal Center', wagons: 48, maxTeu: 96, bookedTeu: 94, etd: '19:10', track: 'Spur 4' },
    { trainId: 'RAIL-WEST-21', destination: 'Denver Freight Interchange', wagons: 30, maxTeu: 60, bookedTeu: 45, etd: '22:00', track: 'Spur 2' }
  ]);

  return (
    <div className="intermodal-rail-dispatch" style={{ padding: '20px', background: '#0f172a', color: '#f8fafc', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#38bdf8' }}>Intermodal Freight Rail Dispatch Matrix</h3>
      <div style={{ display: 'grid', gap: '10px' }}>
        {trains.map(t => (
          <div key={t.trainId} style={{ padding: '12px', background: '#1e293b', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontWeight: 'bold', color: '#67e8f9' }}>{t.trainId} &rarr; {t.destination}</span>
              <span style={{ color: '#fbbf24', fontSize: '0.85rem' }}>Track: {t.track} | ETD: {t.etd}</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              Load Factor: {t.bookedTeu}/{t.maxTeu} TEU ({Math.round((t.bookedTeu / t.maxTeu) * 100)}%) across {t.wagons} double-stack wagons
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntermodalRailDispatch;
