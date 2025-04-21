import React from "react";

const TrustScoreBadge = ({ score }: { score: number }) => {
  const color =
    score >= 4 ? "bg-green-500" :
    score >= 2 ? "bg-yellow-500" :
    "bg-red-500";

  return (
    <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${color}`}>
      Trust Score: {score.toFixed(1)} / 5
    </div>
  );
};

export default TrustScoreBadge;
