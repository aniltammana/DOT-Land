import React from 'react';

interface NavbarProps {
    account: string | null;
    onConnectWallet: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ account, onConnectWallet }) => {
    return (
        <div className="navbar">
            <h1>Virtual Real Estate Game</h1>
            {account ? (
                <p>Connected: {account}</p>
            ) : (

                <button onClick={onConnectWallet}>Connect Wallet</button>
            )}
        </div>
    );
};

export default Navbar;
