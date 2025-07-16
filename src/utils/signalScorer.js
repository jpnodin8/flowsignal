export function scoreFlow(flow) {
  const {
    volume,
    openInterest,
    expiry,
    strike,
    underlyingPrice = flow.price,
    premium,
    darkPoolPercent,
    shortInterest,
    floatSize,
    isSweep,
    side,
  } = flow;

  let score = 0;
  let reasons = [];

  const voiRatio = volume / openInterest;
  if (voiRatio >= 3) {
    score += 20;
    reasons.push(`Volume is ${voiRatio.toFixed(1)}x OI`);
  }

  const daysToExpiry = (new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24);
  if (daysToExpiry <= 7) {
    score += 15;
    reasons.push("Short-dated expiry (< 7 days)");
  }

  const otmPercent = ((strike - underlyingPrice) / underlyingPrice) * 100;
  if (otmPercent >= 10) {
    score += 10;
    reasons.push(`Deep OTM (${otmPercent.toFixed(1)}%)`);
  }

  if (isSweep && side === "ask") {
    score += 20;
    reasons.push("Aggressive ask-side sweep");
  }

  if (darkPoolPercent >= 25) {
    score += 10;
    reasons.push(`High dark pool activity (${darkPoolPercent}%)`);
  }

  if (shortInterest >= 15 && floatSize <= 50_000_000) {
    score += 25;
    reasons.push("Gamma squeeze potential (high SI + low float)");
  }

  return {
    score: Math.min(score, 100),
    summary: reasons.join("; ")
  };
}