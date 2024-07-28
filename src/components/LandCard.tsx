import React from 'react';
import { Land } from '../api/types';

interface LandCardProps {
  land: Land;
}

const LandCard: React.FC<LandCardProps> = ({ land }) => {
  return (
    <div className="land-card">
      <h2>Land ID: {land.id}</h2>
      <p>Owner: {land.owner}</p>
      <p>Description: {land.description}</p>
    </div>
  );
};

export default LandCard;
