import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const programData = [
  { name: 'Certificate in Health Science', value: 25, shortName: 'CertHSc' },
  { name: 'Bachelor of Health Science', value: 12, shortName: 'BHSc' },
  { name: 'Biomedical Science', value: 2, shortName: 'BSc' },
];

const supportData = [
  { name: 'JB HiFi Voucher', value: 30 },
  { name: 'Accommodation', value: 40 },
  { name: 'Countdown Voucher', value: 33 },
  { name: 'Transport', value: 15 },
  { name: 'Book Shop', value: 4 },
  { name: 'Other', value: 15 },
  { name: '2025 Accommodation', value: 14 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const FinanceDashboard = () => (
  <div className="w-full h-screen p-4 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold mb-6 text-center">Student Support Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[calc(100vh-8rem)]">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">Program Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={programData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ shortName, percent }) => `${shortName} ${(percent * 100).toFixed(0)}%`}
            >
              {programData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">Popular Support Categories</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart 
            data={supportData} 
            layout="vertical" 
            margin={{ left: 120, right: 20, top: 20, bottom: 20 }}
          >
            <XAxis 
              type="number" 
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={120} 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value.length > 15 ? `${value.slice(0, 15)}...` : value}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default FinanceDashboard;