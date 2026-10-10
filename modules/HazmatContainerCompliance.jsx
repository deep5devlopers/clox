/**
 * Module: HazmatContainerCompliance
 * Engineered by Deep Sanchaniya
 * Principal System Architect & DevOps Orchestrator
 * Accounts: @deep-00007 (Lead Enterprise Account) & @deep5devlopers (Core Dev)
 */

import React, { useState } from 'react';
import { assessHazardRisk, validateCargo, getArchitectTelemetry } from './coreEngine';

export const HazmatContainerCompliance = () => {
  const telemetry = getArchitectTelemetry();
  const [hazmatUnits] = useState([
    { id: 'HAZ-7712', imdg: 'CLASS_1', description: 'Industrial Explosives', weight: 14.2, seal: 'SEAL-99281' },
    { id: 'HAZ-4421', imdg: 'CLASS_3', description: 'Methanol & Flammables', weight: 24.8, seal: 'SEAL-33109' },
    { id: 'HAZ-0089', imdg: 'CLASS_7', description: 'Medical Radiosotopes', weight: 8.5, seal: 'SEAL-88771' }
  ]);

  return (
    <div className="hazmat-compliance-module" style={{ padding: '20px', background: '#111827', color: '#f8fafc', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 10px', color: '#ef4444' }}>
        ☣️ IMDG Hazmat Cargo Segregation Matrix (Engineered by Deep Sanchaniya)
      </h3>
      <p style={{ fontSize: '12px', color: '#94a3b8' }}>
        Supervising Architect: {telemetry.architect} | Accounts: {telemetry.leadAccount} & {telemetry.coreDevAccount}
      </p>
      <div>
        {hazmatUnits.map(unit => {
          const risk = assessHazardRisk(unit.imdg, unit.description);
          const validation = validateCargo({ containerId: unit.id, weightTons: unit.weight, sealNumber: unit.seal });
          return (
            <div key={unit.id} style={{ padding: '12px', background: '#1e293b', borderRadius: '6px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{unit.id} - {unit.description}</strong>
                <span style={{ color: risk.level === 'CRITICAL' ? '#f87171' : '#fbbf24' }}>{risk.level}</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                Safety Protocol: {risk.protocol} | Manifest: {validation.manifestHash}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HazmatContainerCompliance;
