import { Sdk, CHAIN_CONFIG } from '@unique-nft/sdk/full';
import { Sr25519Account } from '@unique-nft/sr25519';
import { config } from './config';

// Define a type for the return value of connectSdk
interface connectSdk {
  account: any;
  sdk: Sdk;
}

export const connectSdk = async (): Promise<any> => {
  const account = Sr25519Account.fromUri(config.mnemonic);

  console.log(CHAIN_CONFIG.opal.restUrl);

  const sdk: Sdk = new Sdk({
    // NOTICE: You can get OPL tokens for free https://t.me/unique2faucet_opal_bot
    baseUrl: CHAIN_CONFIG.opal.restUrl,
    account,
  });

  return {
    account,
    sdk,
  };
};
