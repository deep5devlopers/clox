import React, { useState } from 'react';

/**
 * HazmatContainerCompliance.jsx
 * IMO dangerous goods classification, yard segregation & safety sensor logs.
 * Architecture: @deep-00007 (Lead) | Dev: @deep5devlopers
 */
export const HazmatContainerCompliance = () => {
  const [hazmatUnits, setHazmatUnits] = useState([
    { containerId: 'HZMU-401928', imoClass: '3.1 Flammable Liquids', unNumber: 'UN 1203 (Gasoline)', yardZone: 'Bunker H1', tempCelsius: 18.2, status: 'ISOLATED' },
    { containerId: 'HZMU-881240', imoClass: '5.1 Oxidizing Substances', unNumber: 'UN 1444 (Ammonium Persulfate)', yardZone: 'Bunker H4', tempCelsius: 16.5, status: 'SECURED' },
    { containerId: 'HZMU-330192', imoClass: '8 Corrosive Liquids', unNumber: 'UN 1789 (Hydrochloric Acid)', yardZone: 'Bunker H2', tempCelsius: 19.0, status: 'SECURED' },
    { containerId: 'HZMU-661902', imoClass: '2.1 Flammable Gases', unNumber: 'UN 1075 (LPG)', yardZone: 'Bunker H3', tempCelsius: 15.8, status: 'MONITORED' }
  ]);

  return (
    <div className="hazmat-compliance-matrix" style={{ padding: '20px', background: '#0f172a', color: '#f8fafc', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#f87171' }}>Hazardous Cargo (IMDG) Segregation &amp; Safety Compliance</h3>
      <div style={{ display: 'grid', gap: '8px' }}>
        {hazmatUnits.map(h => (
          <div key={h.containerId} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#1e293b', borderRadius: '6px', borderLeft: '4px solid #ef4444' }}>
            <div>
              <span style={{ fontWeight: 'bold', color: '#fca5a5' }}>{h.containerId}</span> - {h.imoClass}
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ID: {h.unNumber} | Assigned: {h.yardZone}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', background: '#7f1d1d', color: '#fecaca' }}>
                {h.status}
              </span>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>Temp: {h.tempCelsius}&deg;C</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HazmatContainerCompliance;
