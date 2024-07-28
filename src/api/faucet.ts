import { handleApiError } from '../utils/errorHandling';
import { connectSdk } from '../utils/connectSdk';

export const getTestTokens = async (address: string) => {
  try {
    const {account, uniqueSdk} = await connectSdk();
    const result = await uniqueSdk.requestTokens(address); // Example method, change as needed
    return result;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
