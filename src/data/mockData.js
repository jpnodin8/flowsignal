import { scoreFlow } from '../utils/signalScorer';

const rawFlows = [
  {
    ticker: 'META',
    price: 350,
    strike: 370,
    expiry: '2025-07-19',
    volume: 10502,
    openInterest: 3400,
    premium: 735000,
    darkPoolPercent: 28,
    shortInterest: 16,
    floatSize: 48000000,
    isSweep: true,
    side: 'ask',
    type: 'CALL',
  },
  {
    ticker: 'RBLX',
    price: 38,
    strike: 45,
    expiry: '2025-07-19',
    volume: 18000,
    openInterest: 5400,
    premium: 420000,
    darkPoolPercent: 12,
    shortInterest: 22,
    floatSize: 47000000,
    isSweep: true,
    side: 'ask',
    type: 'CALL',
  }
];

const scoredFlows = rawFlows.map(flow => {
  const { score, summary } = scoreFlow(flow);
  return {
    ...flow,
    confidenceScore: score,
    aiSummary: summary
  };
});

export default scoredFlows;