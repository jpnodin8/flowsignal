import React from 'react';

const FlowCard = ({ flow }) => {
  const {
    ticker,
    price,
    strike,
    expiry,
    volume,
    open_interest,
    premium,
    dark_pool_percent,
    confidence_score,
    ai_summary,
    type
  } = flow;

  const isHighConviction = confidence_score >= 85;
  const isGammaRisk = ai_summary?.includes("Gamma squeeze");

  return (
    <div className="bg-zinc-800 p-4 rounded-xl shadow-md border border-zinc-700 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-white">{ticker}</h2>
          <p className="text-sm text-zinc-400">${price} → ${strike} by {expiry}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-green-400 font-semibold">{type}</p>
          <p className="text-sm text-zinc-400">Premium: ${premium?.toLocaleString()}</p>
        </div>
      </div>
      <div className="text-sm text-zinc-300">
        Volume: {volume} ({(volume / open_interest).toFixed(1)}x OI), Dark Pool: {dark_pool_percent}%
      </div>
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        {isHighConviction && <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">🔥 High Conviction</span>}
        {isGammaRisk && <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">⚡ Gamma Risk</span>}
      </div>
      <p className="text-xs text-zinc-400 mt-2 italic">{ai_summary}</p>
      <p className="text-sm text-white mt-1">Confidence: {confidence_score}/100</p>
    </div>
  );
};

export default FlowCard;