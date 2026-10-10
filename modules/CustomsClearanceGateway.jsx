import React, { useState } from 'react';

/**
 * CustomsClearanceGateway.jsx
 * Port customs declaration validator, bonded warehouse permits & inspection status.
 * Architecture: @deep-00007 (Lead) | Dev: @deep5devlopers
 */
export const CustomsClearanceGateway = () => {
  const [declarations, setDeclarations] = useState([
    { id: 'CUST-901', billOfLading: 'BL-882190', hsCode: '8471.30', status: 'RELEASED', agent: 'Global Logistics Corp', dutyPaid: true },
    { id: 'CUST-902', billOfLading: 'BL-442812', hsCode: '8517.12', status: 'INSPECTION_REQUIRED', agent: 'Maritime Express Ltd', dutyPaid: false },
    { id: 'CUST-903', billOfLading: 'BL-193021', hsCode: '8708.29', status: 'RELEASED', agent: 'TransPacific Freight', dutyPaid: true },
    { id: 'CUST-904', billOfLading: 'BL-601934', hsCode: '3004.90', status: 'BONDED_TRANSIT', agent: 'PharmaLog Worldwide', dutyPaid: true },
    { id: 'CUST-905', billOfLading: 'BL-771249', hsCode: '0901.21', status: 'DOCUMENT_REVIEW', agent: 'AgriTrade Alliance', dutyPaid: false }
  ]);

  return (
    <div className="customs-clearance-gateway" style={{ padding: '20px', background: '#0f172a', color: '#f8fafc', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#38bdf8' }}>Customs Clearance &amp; Manifest Audit Gateway</h3>
      <div style={{ display: 'grid', gap: '8px' }}>
        {declarations.map(d => (
          <div key={d.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#1e293b', borderRadius: '6px' }}>
            <div>
              <span style={{ fontWeight: 'bold', color: '#93c5fd' }}>{d.id}</span> - {d.billOfLading} (HS: {d.hsCode})
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Agent: {d.agent}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{
                padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600',
                background: d.status === 'RELEASED' ? '#065f46' : d.status === 'INSPECTION_REQUIRED' ? '#991b1b' : '#854d0e'
              }}>
                {d.status}
              </span>
              <div style={{ fontSize: '0.75rem', color: d.dutyPaid ? '#4ade80' : '#f87171', marginTop: '4px' }}>
                {d.dutyPaid ? '✓ Duty Cleared' : '⚠ Duty Pending'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomsClearanceGateway;
