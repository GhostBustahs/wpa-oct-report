import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const SurveyDataVisualization = () => {
  const yearGroupData = [
    { name: 'Year 9', value: 20 },
    { name: 'Year 10', value: 26 },
    { name: 'Year 11', value: 25 },
    { name: 'Year 12', value: 44 },
    { name: 'Year 13', value: 19 },
    { name: 'Whanau', value: 12 },
  ];

  const rankScoreData = [
    { name: 'Yes', value: 131 },
    { name: 'Need more info', value: 11 },
    { name: 'No', value: 1 },
  ];

  const fmhsProgramsData = [
    { name: 'Yes', value: 85 },
    { name: 'Need more info', value: 8 },
    { name: 'No', value: 1 },
  ];

  const supportData = [
    { name: 'Yes', value: 137 },
    { name: 'No', value: 1 },
    { name: 'Need more info', value: 2 },
  ];

  const futureEngagementData = [
    { name: 'Yes/Positive', value: 71 },
    { name: 'Maybe', value: 1 },
    { name: 'Not answered', value: 12 },
  ];

  const locationAttendanceData = [
    { name: 'Waikato', value: 45 },
    { name: 'Hawkes Bay', value: 27 },
    { name: 'Whangarei', value: 28 },
    { name: 'Whakatane', value: 7 },
    { name: 'Tauranga', value: 21 },
    { name: 'Gisborne', value: 30 },
    { name: 'Online', value: 12 },
    { name: 'Online Whanau', value: 6 },
  ];

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Whanau Hui Ā Rohe</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Year Group Breakdown</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={yearGroupData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Understanding Rank Score</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={rankScoreData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {rankScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Location Attendance</h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={locationAttendanceData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            interval={0} 
            tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }}
            height={100}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>

      
        <div>
          <h2 className="text-2xl font-semibold mb-4">Prepared for FMHS Programs</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={fmhsProgramsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {fmhsProgramsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Feeling Informed to Support</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={supportData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {supportData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Future Engagement Intention</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={futureEngagementData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {futureEngagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Word Cloud: Key Messages</h2>
        <div className="flex flex-wrap justify-center items-center p-4 bg-gray-800 rounded">
          <span className="m-2 text-3xl text-blue-400">Support</span>
          <span className="m-2 text-2xl text-green-400">Apply</span>
          <span className="m-2 text-xl text-yellow-400">RankScore</span>
          <span className="m-2 text-2xl text-red-400">Maori</span>
          <span className="m-2 text-lg text-purple-400">Opportunities</span>
          <span className="m-2 text-2xl text-indigo-400">University</span>
          <span className="m-2 text-xl text-pink-400">Credits</span>
          <span className="m-2 text-lg text-teal-400">Pathways</span>
          <span className="m-2 text-2xl text-orange-400">Science</span>
          <span className="m-2 text-xl text-cyan-400">Health</span>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Word Cloud: Benefits of Attending</h2>
        <div className="flex flex-wrap justify-center items-center p-4 bg-gray-800 rounded">
          <span className="m-2 text-3xl text-blue-400">Information</span>
          <span className="m-2 text-2xl text-green-400">Learning</span>
          <span className="m-2 text-2xl text-yellow-400">Understanding</span>
          <span className="m-2 text-xl text-red-400">Opportunities</span>
          <span className="m-2 text-lg text-purple-400">Pathways</span>
          <span className="m-2 text-2xl text-indigo-400">Knowledge</span>
          <span className="m-2 text-xl text-pink-400">Support</span>
          <span className="m-2 text-lg text-teal-400">University</span>
          <span className="m-2 text-2xl text-orange-400">Clarity</span>
          <span className="m-2 text-xl text-cyan-400">Future</span>
        </div>
      </div>
    </div>
  );
};

export default SurveyDataVisualization;