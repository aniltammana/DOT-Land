import React from 'react';
import { Land } from '../api/types';
import { transferLandNFT } from '../api/nft';

interface LandCardProps {
  land: Land;
  account: string | null;
}

const LandCard: React.FC<LandCardProps> = ({ land, account }) => {
  const handleBuyLand = async () => {
    if (!account) {
      alert('Please connect your wallet first.');
      return;
    }

    try {
      await transferLandNFT(land.id, account);
      alert('Land purchased successfully!');
    } catch (error) {
      console.error('Error purchasing land:', error);
      alert('Failed to purchase land.');
    }
  };

  return (
    <div className="land-card">
      <h2>Land ID: {land.id}</h2>
      <p>Owner: {land.owner}</p>
      <p>Description: {land.description}</p>
      <button onClick={handleBuyLand}>Buy Land</button>
    </div>
  );
};

export default LandCard;
