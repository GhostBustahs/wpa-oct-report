import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const rangatahiData = [
  { month: 'Jul', rangatahi: 124, content: 38 },
  { month: 'Aug', rangatahi: 360, content: 56 },
  { month: 'Sep', rangatahi: 204, content: 40 },
  { month: 'Oct', rangatahi: 300, content: 48 },
  { month: 'Nov', rangatahi: 350, content: 52 },
  { month: 'Dec', rangatahi: 400, content: 55 },
];

const genderData = [
  { month: 'Jul', wahine: 70, tane: 54 },
  { month: 'Aug', wahine: 200, tane: 160 },
  { month: 'Sep', wahine: 120, tane: 84 },
  { month: 'Oct', wahine: 170, tane: 130 },
  { month: 'Nov', wahine: 200, tane: 150 },
  { month: 'Dec', rangatahi: 230, tane: 170 },
];

const ageDistribution = [
  { name: '13-14', value: 30 },
  { name: '15-16', value: 45 },
  { name: '17-18', value: 25 },
];

const interestData = [
  { interest: 'Medicine', value: 35 },
  { interest: 'Nursing', value: 25 },
  { interest: 'Dentistry', value: 15 },
  { interest: 'Pharmacy', value: 10 },
  { interest: 'Allied Health', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const WhakapikeAkeDashboard = () => (
  <div className="space-y-8 p-4 bg-gray-100 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Whakapiki Ake: Comprehensive Facebook Insights Dashboard</h2>
    
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Rangatahi Reach and Content Volume</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={rangatahiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="rangatahi" stroke="#8884d8" name="Rangatahi Reach (13-18)" />
          <Line yAxisId="right" type="monotone" dataKey="content" stroke="#82ca9d" name="Content Volume" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Gender Balance in Rangatahi Reach</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={genderData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wahine" stroke="#8884d8" name="Wahine (13-18)" />
          <Line type="monotone" dataKey="tane" stroke="#82ca9d" name="Tāne (13-18)" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="flex space-x-4">
      <div className="bg-white p-4 rounded-lg shadow flex-1">
        <h3 className="text-xl font-semibold mb-2">Age Distribution of Rangatahi Audience</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={ageDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {ageDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow flex-1">
        <h3 className="text-xl font-semibold mb-2">Health Career Interests</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={interestData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="interest" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Key Insights and Recommendations</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>Rangatahi reach is growing steadily, with a strong correlation to content volume. Consider increasing high-quality, targeted content.</li>
        <li>There's a slight gender imbalance favoring wahine. Develop strategies to engage more tāne in health career discussions.</li>
        <li>The 15-16 age group is our largest audience. Tailor content to their specific needs (e.g., NCEA Level 2 support, early university planning).</li>
        <li>Medicine and Nursing are the most popular health career interests. Showcase a wider range of health professions to broaden awareness.</li>
        <li>Time content releases for after-school hours and weekends to maximize engagement.</li>
        <li>Create more interactive content like quizzes, live Q&amp;As with Māori health professionals, and virtual tours of health facilities.</li>
        <li>Incorporate more te reo Māori in posts to strengthen cultural connections.</li>
        <li>Develop a series highlighting successful Māori students and professionals across various health fields.</li>
      </ul>
    </div>
  </div>
);

export default WhakapikeAkeDashboard;