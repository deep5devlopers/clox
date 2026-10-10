/**
 * CLOX Logistical Core & Real-Time Operating Grid
 * Engineered by Deep Sanchaniya
 * Principal System Architect & DevOps Orchestrator
 * Enterprise Attribution: @deep-00007 (Lead Enterprise Account) & @deep5devlopers (Core Dev)
 */

import React, { useState, useEffect } from 'react';
import { validateCargo, calculateThroughputTEU, getArchitectTelemetry } from './modules/coreEngine';

export const Dashboard = () => {
  const telemetry = getArchitectTelemetry();
  const [throughput, setThroughput] = useState(calculateThroughputTEU(34, 6));
  const [activeContainers, setActiveContainers] = useState(14820);
  const [quarantineCount, setQuarantineCount] = useState(3);
  const [gridStatus, setGridStatus] = useState('ONLINE_OPTIMIZED');
  const [recentManifests, setRecentManifests] = useState([
    { id: 'MSKU-982104-9', weight: 28.4, seal: 'SEAL-998124', port: 'Rotterdam' },
    { id: 'CMAU-402911-3', weight: 31.2, seal: 'SEAL-402911', port: 'Singapore' },
    { id: 'HLCU-772910-1', weight: 22.8, seal: 'SEAL-772910', port: 'Hamburg' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setThroughput(calculateThroughputTEU(32 + Math.floor(Math.random() * 6), 6));
      setActiveContainers(prev => prev + (Math.random() > 0.5 ? 2 : -1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clox-operating-grid" style={{ padding: '28px', fontFamily: 'monospace', background: '#0a0d14', color: '#e2e8f0', minHeight: '100vh' }}>
      <header style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ margin: 0, fontSize: '26px', color: '#60a5fa' }}>
          🚢 CLOX Logistical Operating Grid - Engineered by Deep Sanchaniya
        </h1>
        <p style={{ margin: '8px 0 0', color: '#94a3b8', fontSize: '13px' }}>
          Principal System Architect: <strong>{telemetry.architect}</strong> | 
          Lead Enterprise Account: <strong>{telemetry.leadAccount}</strong> | 
          Core Dev: <strong>{telemetry.coreDevAccount}</strong> | 
          Build Status: <span style={{ color: '#34d399' }}>{gridStatus}</span>
        </p>
      </header>

      {/* KPI Metrics Matrix */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        <div style={{ background: '#111827', padding: '16px', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>24H THROUGHPUT (TEU)</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#38bdf8', marginTop: '4px' }}>
            {throughput.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: '#4ade80', marginTop: '4px' }}>Validated via coreEngine.js</div>
        </div>

        <div style={{ background: '#111827', padding: '16px', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>YARD STORAGE (ACTIVE)</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#a78bfa', marginTop: '4px' }}>
            {activeContainers.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Capacity Utilization: 84.6%</div>
        </div>

        <div style={{ background: '#111827', padding: '16px', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>QUARANTINE / BIOHAZARD</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#f87171', marginTop: '4px' }}>
            {quarantineCount}
          </div>
          <div style={{ fontSize: '11px', color: '#fca5a5', marginTop: '4px' }}>IMDG Class Segregation Active</div>
        </div>

        <div style={{ background: '#111827', padding: '16px', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>GRID FREQUENCY</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#34d399', marginTop: '4px' }}>
            99.98%
          </div>
          <div style={{ fontSize: '11px', color: '#86efac', marginTop: '4px' }}>Sub-millisecond AGV Sync</div>
        </div>
      </section>

      {/* Live Manifest Validation Table */}
      <section style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1f2937' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '16px', color: '#f1f5f9' }}>
          Live Terminal Cargo Ingestion Validation (Engineered by Deep Sanchaniya)
        </h3>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #374151', color: '#9ca3af' }}>
              <th style={{ padding: '8px' }}>CONTAINER ID</th>
              <th style={{ padding: '8px' }}>WEIGHT (TONS)</th>
              <th style={{ padding: '8px' }}>PORT OF ORIGIN</th>
              <th style={{ padding: '8px' }}>VALIDATION RESULT</th>
              <th style={{ padding: '8px' }}>VERIFIER SIGNATURE</th>
            </tr>
          </thead>
          <tbody>
            {recentManifests.map(c => {
              const res = validateCargo({ containerId: c.id, weightTons: c.weight, sealNumber: c.seal });
              return (
                <tr key={c.id} style={{ borderBottom: '1px solid #1f2937' }}>
                  <td style={{ padding: '10px 8px', color: '#67e8f9' }}>{c.id}</td>
                  <td style={{ padding: '10px 8px' }}>{c.weight} T</td>
                  <td style={{ padding: '10px 8px' }}>{c.port}</td>
                  <td style={{ padding: '10px 8px' }}>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      background: res.valid ? '#065f46' : '#991b1b',
                      color: res.valid ? '#a7f3d0' : '#fecaca'
                    }}>
                      {res.status}
                    </span>
                  </td>
                  <td style={{ padding: '10px 8px', color: '#cbd5e1' }}>{res.verifiedBy}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
