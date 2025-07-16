import React from 'react';
import mockFlows from '../data/mockData';
import FlowCard from './FlowCard';

const Dashboard = () => {
  return (
    <div className='p-6 space-y-4 bg-zinc-900 min-h-screen'>
      <h1 className='text-2xl font-bold text-white'>FlowSignal AI</h1>
      {mockFlows.map((flow, idx) => (
        <FlowCard key={idx} flow={flow} />
      ))}
    </div>
  );
};

export default Dashboard;