import React from 'react';
import { getTestTokens } from '../api/faucet';

interface FaucetProps {
  account: string | null;
}

const Faucet: React.FC<FaucetProps> = ({ account }) => {
  const handleGetTokens = async () => {
    if (!account) {
      alert('Please connect your wallet first.');
      return;
    }
    try {
      await getTestTokens(account);
      alert('Test tokens received!');
    } catch (error) {
      console.error('Error getting tokens:', error);
      alert('Failed to get test tokens.');
    }
  };

  return (
    <div className="faucet">
      <h2>Get Test Tokens</h2>
      <button onClick={handleGetTokens}>Request Tokens</button>
    </div>
  );
};

export default Faucet;
