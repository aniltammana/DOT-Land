import { mnemonicToMiniSecret, naclKeypairFromSeed } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';
import { handleApiError } from '../utils/errorHandling';

const keyring = new Keyring({ type: 'sr25519' });

export const getAccountFromMnemonic = async () => {
  try {
    const mnemonic = process.env.REACT_APP_MNEMONIC;
    if (!mnemonic) {
      throw new Error('Mnemonic not provided in environment settings');
    }
    const seed = mnemonicToMiniSecret(mnemonic);
    const { publicKey } = naclKeypairFromSeed(seed);
    const account = keyring.addFromSeed(seed);
    return account;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
