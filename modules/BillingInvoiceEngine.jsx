import React, { useState } from 'react';

export const BillingInvoiceEngine = () => {
  const [invoices, setInvoices] = useState([
    { id: 'INV-9081', billTo: 'Maersk Logistics Corp', containerId: 'MSKU-481920-1', freeDays: 5, dwellDays: 9, demurrageRatePerDay: 120, totalDemurrage: 480, status: 'PENDING' },
    { id: 'INV-9082', billTo: 'Mediterranean Shipping', containerId: 'MEDU-902182-4', freeDays: 4, dwellDays: 4, demurrageRatePerDay: 140, totalDemurrage: 0, status: 'CLEARED' },
    { id: 'INV-9083', billTo: 'Hapag-Lloyd Ocean Line', containerId: 'HLXU-109284-8', freeDays: 5, dwellDays: 12, demurrageRatePerDay: 150, totalDemurrage: 1050, status: 'INVOICED' }
  ]);

  const [filter, setFilter] = useState('ALL');

  const calculateDemurrage = (dwell, free, rate) => {
    const billable = Math.max(0, dwell - free);
    return billable * rate;
  };

  const filteredInvoices = invoices.filter(inv => filter === 'ALL' || inv.status === filter);

  return (
    <div className="billing-invoice-engine" style={{ padding: '20px', backgroundColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', color: '#38bdf8' }}>Demurrage, Storage Tariff & Billing Matrix</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['ALL', 'PENDING', 'INVOICED', 'CLEARED'].map(st => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              style={{
                background: filter === st ? '#0284c7' : '#334155',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 10px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
            <th style={{ padding: '8px' }}>Invoice ID</th>
            <th style={{ padding: '8px' }}>Billing Entity</th>
            <th style={{ padding: '8px' }}>Container Unit</th>
            <th style={{ padding: '8px' }}>Dwell / Free Days</th>
            <th style={{ padding: '8px' }}>Demurrage Total</th>
            <th style={{ padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map(inv => (
            <tr key={inv.id} style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', color: '#38bdf8' }}>{inv.id}</td>
              <td style={{ padding: '8px' }}>{inv.billTo}</td>
              <td style={{ padding: '8px', fontFamily: 'monospace' }}>{inv.containerId}</td>
              <td style={{ padding: '8px' }}>{inv.dwellDays} d / {inv.freeDays} d</td>
              <td style={{ padding: '8px', fontWeight: 'bold', color: inv.totalDemurrage > 0 ? '#f43f5e' : '#10b981' }}>
                ${inv.totalDemurrage.toFixed(2)}
              </td>
              <td style={{ padding: '8px' }}>
                <span style={{
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  backgroundColor: inv.status === 'CLEARED' ? '#065f46' : inv.status === 'PENDING' ? '#854d0e' : '#1e40af',
                  color: '#fff'
                }}>
                  {inv.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingInvoiceEngine;
