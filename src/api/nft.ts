
import { handleApiError } from '../utils/errorHandling';
import { connectSdk } from '../utils/connectSdk';


export const createLandNFT = async (ownerAddress: string, metadata: string) => {
  try {
    const {account, uniqueSdk} = await connectSdk();
    const collectionId = 1; // Use your actual collection ID
    const result = await uniqueSdk.createToken({
      collectionId,
      owner: ownerAddress,
      data: { metadata },
    });
    return result;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const transferLandNFT = async (tokenId: string, to: string) => {
  try {
    const {account, uniqueSdk} = await connectSdk();
    const result = await uniqueSdk.transferToken({
      tokenId,
      to,
    });
    return result;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
