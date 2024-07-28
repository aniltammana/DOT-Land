import React, { useState } from 'react';
import Navbar from './Navbar';
import Marketplace from './Marketplace';
import Faucet from './Faucet';
import ErrorBoundary from './ErrorBoundary';
import { getAccountFromMnemonic } from '../api/wallet';

const App: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    try {
      const mnemonicAccount = await getAccountFromMnemonic();
      setAccount(mnemonicAccount.address);
    } catch (error) {
      console.error('Failed to get account from mnemonic:', error);
      alert('Failed to connect wallet using mnemonic');
    }
  };

  return (
    <ErrorBoundary>
      <div>
        <h1>Hello, World!</h1>
      </div>
      <div>
        <Navbar account={account} onConnectWallet={handleConnectWallet} />
        <Faucet account={account} />
        <Marketplace account={account} />
      </div>
    </ErrorBoundary>
  );
};

export default App;
