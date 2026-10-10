import React, { useState } from 'react';

export const VesselBerthScheduler = () => {
  const [schedules, setSchedules] = useState([
    { quayId: 'QUAY-1A', draftDepthMeters: 16.5, assignedVessel: 'CMA CGM Palais', craneAllocation: 3, departureWindow: '2026-10-12 18:00', tideToleranceOk: true },
    { quayId: 'QUAY-2B', draftDepthMeters: 18.0, assignedVessel: 'Maersk Mc-Kinney', craneAllocation: 4, departureWindow: '2026-10-13 06:00', tideToleranceOk: true },
    { quayId: 'QUAY-3C', draftDepthMeters: 15.0, assignedVessel: 'Hapag-Lloyd Express', craneAllocation: 2, departureWindow: '2026-10-11 22:30', tideToleranceOk: true },
    { quayId: 'QUAY-4A', draftDepthMeters: 17.5, assignedVessel: 'Ever Golden', craneAllocation: 4, departureWindow: '2026-10-12 14:00', tideToleranceOk: true }
  ]);

  return (
    <div className="vessel-berth-scheduler" style={{ padding: '20px', backgroundColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }}>
      <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: '#38bdf8' }}>Quay Berth Scheduling & Dynamic Crane Allocation</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
            <th style={{ padding: '8px' }}>Quay Position</th>
            <th style={{ padding: '8px' }}>Channel Draft Depth</th>
            <th style={{ padding: '8px' }}>Docked Vessel</th>
            <th style={{ padding: '8px' }}>Allocated STS Cranes</th>
            <th style={{ padding: '8px' }}>Target Departure</th>
            <th style={{ padding: '8px' }}>Tidal Window</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(sc => (
            <tr key={sc.quayId} style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '8px', fontWeight: '600', color: '#38bdf8' }}>{sc.quayId}</td>
              <td style={{ padding: '8px' }}>{sc.draftDepthMeters} m</td>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>{sc.assignedVessel}</td>
              <td style={{ padding: '8px' }}>{sc.craneAllocation} units</td>
              <td style={{ padding: '8px' }}>{sc.departureWindow}</td>
              <td style={{ padding: '8px' }}>
                <span style={{ background: '#065f46', color: '#34d399', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>
                  OPTIMAL (HIGH TIDE)
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VesselBerthScheduler;
