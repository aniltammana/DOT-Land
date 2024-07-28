import { ApiPromise, WsProvider } from '@polkadot/api';
import Unique from '@unique-nft/sdk'; // Ensure this import is correct
import { handleApiError } from '../utils/errorHandling';

const wsProvider = new WsProvider('wss://rpc-opal.unique.network');

let apiPromise: ApiPromise | null = null;

export const connectToBlockchain = async (): Promise<ApiPromise> => {
  try {
    if (!apiPromise) {
      apiPromise = await ApiPromise.create({ provider: wsProvider });
    }
    return apiPromise;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
