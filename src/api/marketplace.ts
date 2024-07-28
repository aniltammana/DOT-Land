import { connectSdk } from '../utils/connectSdk';
import { handleApiError } from '../utils/errorHandling';

export const fetchLands = async () => {
  try {
    const {account, uniqueSdk} = await connectSdk();
    const lands = await uniqueSdk.getCollections(); // Example method, change as needed
    return lands;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
