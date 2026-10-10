import React, { useState } from 'react';

export const GateInspectionEngine = () => {
  const [gateQueue, setGateQueue] = useState([
    { laneId: 'GATE-01', truckLicense: 'TX-8921-AZ', isoContainer: 'TGHU-940129-3', grossWeightKg: 28400, ocrMatchRate: '99.8%', sealIntact: true, status: 'CLEARED_INBOUND' },
    { laneId: 'GATE-02', truckLicense: 'CA-1029-BR', isoContainer: 'TEMU-209418-0', grossWeightKg: 31200, ocrMatchRate: '98.5%', sealIntact: true, status: 'CLEARED_INBOUND' },
    { laneId: 'GATE-03', truckLicense: 'WA-7740-CL', isoContainer: 'MSKU-663920-5', grossWeightKg: 19800, ocrMatchRate: '87.0%', sealIntact: false, status: 'INSPECTION_HOLD' }
  ]);

  return (
    <div className="gate-inspection-engine" style={{ padding: '20px', backgroundColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }}>
      <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: '#38bdf8' }}>Gate-In Optical OCR & Structural Damage Telemetry</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
            <th style={{ padding: '8px' }}>Gate Lane</th>
            <th style={{ padding: '8px' }}>Truck License</th>
            <th style={{ padding: '8px' }}>ISO Container Code</th>
            <th style={{ padding: '8px' }}>Gross Weight</th>
            <th style={{ padding: '8px' }}>Optical OCR Match</th>
            <th style={{ padding: '8px' }}>Security Seal</th>
            <th style={{ padding: '8px' }}>Gate Status</th>
          </tr>
        </thead>
        <tbody>
          {gateQueue.map(item => (
            <tr key={item.laneId} style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>{item.laneId}</td>
              <td style={{ padding: '8px', fontFamily: 'monospace' }}>{item.truckLicense}</td>
              <td style={{ padding: '8px', fontFamily: 'monospace', color: '#38bdf8' }}>{item.isoContainer}</td>
              <td style={{ padding: '8px' }}>{item.grossWeightKg.toLocaleString()} kg</td>
              <td style={{ padding: '8px' }}>{item.ocrMatchRate}</td>
              <td style={{ padding: '8px', color: item.sealIntact ? '#10b981' : '#f43f5e', fontWeight: 'bold' }}>
                {item.sealIntact ? 'VERIFIED' : 'TAMPERED'}
              </td>
              <td style={{ padding: '8px' }}>
                <span style={{
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  backgroundColor: item.status === 'CLEARED_INBOUND' ? '#065f46' : '#991b1b',
                  color: '#fff'
                }}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GateInspectionEngine;
