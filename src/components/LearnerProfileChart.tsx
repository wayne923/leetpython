import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface LearnerSkill {
  subject: string;
  value: number;
}

interface LearnerProfileChartProps {
  data?: LearnerSkill[];
  color?: string;
}

const defaultData: LearnerSkill[] = [
  { subject: 'Python Basics', value: 90 },
  { subject: 'Functions', value: 85 },
  { subject: 'Classes', value: 80 },
  { subject: 'Error Handling', value: 75 },
  { subject: 'User Input', value: 85 },
  { subject: 'Testing', value: 70 }
];

const Chart: React.FC<LearnerProfileChartProps> = ({
  data = defaultData,
  color = '#4f46e5'
}) => {
  return (
    <div className="w-full h-96 border border-gray-200 rounded-lg">
      <div className="p-4 text-center">Skills Required</div>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Learner"
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Wrap the chart in BrowserOnly
const LearnerProfileChart: React.FC<LearnerProfileChartProps> = (props) => {
  return (
    <BrowserOnly>
      {() => <Chart {...props} />}
    </BrowserOnly>
  );
};

export default LearnerProfileChart;