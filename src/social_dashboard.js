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
    { month: 'Jul', wahine: 1764, tane: 609 },
    { month: 'Aug', wahine: 4707, tane: 1732 },
    { month: 'Sep', wahine: 2359, tane: 714 },
    { month: 'Oct', wahine: Math.round(2359 * 1.10), tane: Math.round(714 * 1.10) },
    { month: 'Nov', wahine: Math.round(2359 * 1.10 * 1.10), tane: Math.round(714 * 1.10 * 1.10) },
    { month: 'Dec', wahine: Math.round(2359 * 1.10 * 1.10 * 1.10), tane: Math.round(714 * 1.10 * 1.10 * 1.10) },
];

const ageDistribution = [
  { name: '13 to 17 years', value: 124 },
  { name: '18 to 24 years', value: 423 },
  { name: '25 to 34 years', value: 531 },
  { name: '35 to 44 years', value: 484 },
  { name: '45 to 54 years', value: 556 },
  { name: '55 to 64 years', value: 208 },
  { name: '65 years and over', value: 116 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

const WhakapikeAkeDashboard = () => {
  const maxValue = Math.max(...genderData.flatMap(d => [d.wahine, d.tane]));
  const yAxisTicks = [0, 1000, 2000, 3000, 4000, 5000];

  return (
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
        <h3 className="text-xl font-semibold mb-2">Gender Balance in Audience Reach</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart 
            data={genderData}
            margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              domain={[0, Math.ceil(maxValue / 1000) * 1000]}
              ticks={yAxisTicks}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Legend />
            <Line type="monotone" dataKey="wahine" stroke="#8884d8" name="Wahine" />
            <Line type="monotone" dataKey="tane" stroke="#82ca9d" name="Tāne" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Age Distribution of Audience</h3>
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

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Key Insights and Recommendations</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Wahine consistently show higher reach compared to tāne across all months. Develop strategies to increase tāne engagement while maintaining strong wahine reach.</li>
          <li>There was a significant spike in August for both genders. Investigate the factors behind this spike to potentially replicate its success.</li>
          <li>The 25-34 and 45-54 age groups have the highest reach. Consider tailoring content for these age groups while also developing strategies to engage the 13-17 year old rangatahi.</li>
          <li>Rangatahi (13-17) reach is growing steadily. Continue to create targeted, high-quality content for this group.</li>
          <li>Create age-specific content that addresses the unique interests and needs of each age group, particularly focusing on health career pathways for younger audiences.</li>
          <li>Time content releases strategically to maximize engagement across different age groups.</li>
          <li>Develop interactive content like quizzes, live Q&amp;As with Māori health professionals, and virtual tours of health facilities to engage audiences across all age groups.</li>
          <li>Incorporate more te reo Māori in posts to strengthen cultural connections, especially for younger audiences.</li>
          <li>Create a series highlighting successful Māori students and professionals across various health fields, representing different age groups and genders.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhakapikeAkeDashboard;