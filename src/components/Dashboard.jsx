import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import FlowCard from './FlowCard';

const Dashboard = () => {
  const [flows, setFlows] = useState([]);

  useEffect(() => {
    fetchFlows();
  }, []);

  const fetchFlows = async () => {
    const { data, error } = await supabase
      .from('signals')
      .select('*')
      .order('confidence_score', { ascending: false })
      .limit(10);

    if (!error && data) {
      setFlows(data);
    }
  };

  return (
    <div className='p-6 space-y-4 bg-zinc-900 min-h-screen'>
      <h1 className='text-2xl font-bold text-white'>FlowSignal AI (Live Supabase)</h1>
      {flows.length > 0 ? flows.map((flow, idx) => (
        <FlowCard key={idx} flow={flow} />
      )) : (
        <p className="text-white">No data found.</p>
      )}
    </div>
  );
};

export default Dashboard;