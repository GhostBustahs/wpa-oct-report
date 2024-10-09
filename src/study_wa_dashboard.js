import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WhakapikiAkeAnalysis = () => {
  const interventionsData = [
    { name: 'MASH 2023 or 2024', count: 48 },
    { name: 'School Visit 2023 or 2024', count: 33 },
    { name: 'COACH 2024', count: 27 },
    { name: 'Zoom Hui 2023 or 2024', count: 16 },
    { name: 'Study Waananga 2023', count: 11 },
    { name: 'Te Whē', count: 7 },
    { name: 'None', count: 2 }
  ];

  const schoolYearData = [
    { name: 'Year 12', value: 38 },
    { name: 'Year 13', value: 35 }
  ];

  const universityApplicationsData = [
    { name: 'Biomedical Sciences', count: 23 },
    { name: 'Bachelor of Health Sciences', count: 25 },
    { name: 'Certificate in Health Sciences', count: 21 },
    { name: 'First Year Health Science Otago', count: 14 },
    { name: 'Tukahika Foundation Programme Otago University', count: 0 },
    { name: 'Other tertiary institution', count: 5 },
    { name: 'No application yet', count: 2 }
  ];

  const careerInterestsData = [
    { name: 'Doctor/Medicine', count: 28 },
    { name: 'Surgery', count: 7 },
    { name: 'Nursing', count: 5 },
    { name: 'Optometry', count: 5 },
    { name: 'Pharmacy', count: 4 },
    { name: 'Radiology', count: 4 },
    { name: 'Pediatrics', count: 4 },
    { name: 'Veterinary Science', count: 2 },
    { name: 'Physiotherapy', count: 2 },
    { name: 'Psychology', count: 2 },
    { name: 'Cardiology', count: 2 },
    { name: 'Other Specialties', count: 6 }
  ];

  const achievementStandardsData = [
    { subject: 'Biology', Level2: 35, Level3: 30 },
    { subject: 'Chemistry', Level2: 32, Level3: 28 },
    { subject: 'Physics', Level2: 25, Level3: 20 },
    { subject: 'English', Level2: 30, Level3: 25 },
    { subject: 'Mathematics', Level2: 28, Level3: 24 },
    { subject: 'History', Level2: 10, Level3: 8 }
  ];

  const selfRatedAbilitiesData = [
    { subject: 'Biology Lvl 2', Achieved: 10, Between_Achieved_and_Merit: 5, Merit: 25, Between_Merit_and_Excellence: 8, Excellence: 15 },
    { subject: 'Chemistry Lvl 2', Achieved: 15, Between_Achieved_and_Merit: 7, Merit: 20, Between_Merit_and_Excellence: 5, Excellence: 10 },
    { subject: 'Physics Lvl 2', Achieved: 20, Between_Achieved_and_Merit: 4, Merit: 15, Between_Merit_and_Excellence: 3, Excellence: 5 },
    { subject: 'English Lvl 2', Achieved: 4, Between_Achieved_and_Merit: 2, Merit: 9, Between_Merit_and_Excellence: 3, Excellence: 6 },
    { subject: 'Mathematics Lvl 2', Achieved: 18, Between_Achieved_and_Merit: 6, Merit: 18, Between_Merit_and_Excellence: 4, Excellence: 12 }
  ];

  const onlineSupportInterestDataLevel2 = [
    { subject: 'Physics', interested: 20 },
    { subject: 'Chemistry', interested: 31 },
    { subject: 'Mathematics', interested: 23 },
    { subject: 'English', interested: 15 }
  ];

  const onlineSupportInterestDataLevel3 = [
    { subject: 'Physics', interested: 16 },
    { subject: 'Chemistry', interested: 24 },
    { subject: 'Calculus', interested: 14 },
    { subject: 'Statistics', interested: 10 },
    { subject: 'English', interested: 20 }
  ];

  const generateYAxisTicks = (data, key, tickCount = 5) => {
    const maxValue = Math.max(...data.map(item => item[key] || 0));
    const interval = Math.ceil(maxValue / tickCount);
    return Array.from({ length: tickCount + 1 }, (_, index) => index * interval);
  };

  const VerticalBarChart = ({ data, dataKey, title, barFill }) => {
    const yAxisTicks = generateYAxisTicks(data, dataKey);
    const maxValue = Math.max(...data.map(item => item[dataKey] || 0));
    
    // Calculate max label length with error handling
    const maxLabelLength = Math.max(...data.map(item => (item.name ? item.name.length : 0)));
    const dynamicMargin = Math.max(100, maxLabelLength * 6); // Adjust multiplier as needed

    return (
      <div className="analysis-container">
        <h2>{title}</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart 
            data={data} 
            layout="vertical" 
            margin={{top: 20, right: 30, left: dynamicMargin, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number"
              domain={[0, Math.ceil(maxValue / 10) * 10]}
              ticks={yAxisTicks}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={dynamicMargin - 10}
              tick={props => (
                <text 
                  x={props.x} 
                  y={props.y} 
                  dy={4} 
                  textAnchor="end" 
                  fill={props.fill} 
                  fontSize={12}
                >
                  {props.payload.value || ''}
                </text>
              )}
            />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Legend />
            <Bar dataKey={dataKey} fill={barFill} name={`Number of ${title}`} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="whakapiki-ake-analysis">
      <h1>Study Wānanga Analysis</h1>

      <VerticalBarChart 
        data={interventionsData}
        dataKey="count"
        title="Whakapiki Ake Interventions Attended"
        barFill="#8884d8"
      />

      <div className="analysis-container">
        <h2>Current Year at School</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={schoolYearData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {schoolYearData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F'][index % 2]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <VerticalBarChart 
        data={universityApplicationsData}
        dataKey="count"
        title="University Program Applications"
        barFill="#82ca9d"
      />

      <VerticalBarChart 
        data={careerInterestsData}
        dataKey="count"
        title="Career Interests"
        barFill="#8884d8"
      />

      <div className="analysis-container">
        <h2>Level 2 and 3 External Achievement Standards</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={achievementStandardsData} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis label={{ value: 'Number of Students', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Level2" fill="#8884d8" name="Level 2" />
            <Bar dataKey="Level3" fill="#82ca9d" name="Level 3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="analysis-container">
        <h2>Self-Rated Abilities in Subjects</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={selfRatedAbilitiesData} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis label={{ value: 'Number of Students', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Achieved" stackId="a" fill="#8884d8" />
            <Bar dataKey="Between_Achieved_and_Merit" stackId="a" fill="#82ca9d" />
            <Bar dataKey="Merit" stackId="a" fill="#ffc658" />
            <Bar dataKey="Between_Merit_and_Excellence" stackId="a" fill="#ff7300" />
            <Bar dataKey="Excellence" stackId="a" fill="#ff0000" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="analysis-container">
        <h2>Interest in Online Academic Support - Level 2</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={onlineSupportInterestDataLevel2} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis label={{ value: 'Number of Interested Students', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="interested" fill="#82ca9d" name="Interested Students" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="analysis-container">
        <h2>Interest in Online Academic Support - Level 3</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={onlineSupportInterestDataLevel3} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis label={{ value: 'Number of Interested Students', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="interested" fill="#8884d8" name="Interested Students" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WhakapikiAkeAnalysis;