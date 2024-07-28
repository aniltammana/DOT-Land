import React, { useEffect, useState } from 'react';
import { fetchLands } from '../api/marketplace';
import LandCard from './LandCard';

interface MarketplaceProps {
  account: string | null;
}

const Marketplace: React.FC<MarketplaceProps> = ({ account }) => {
  const [lands, setLands] = useState<Land[]>([]);

  useEffect(() => {
    const loadLands = async () => {
      try {
        const landsData = await fetchLands();
        setLands(landsData);
      } catch (error) {
        console.error('Error fetching lands:', error);
      }
    };

    loadLands();
  }, []);

  return (
    <div className="marketplace">
      <h2>Marketplace</h2>
      {lands.length > 0 ? (
        lands.map((land) => (
          <LandCard key={land.id} land={land} account={account} />
        ))
      ) : (
        <p>No lands available</p>
      )}
    </div>
  );
};

export default Marketplace;
