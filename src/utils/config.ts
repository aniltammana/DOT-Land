import * as dotenv from 'dotenv';
dotenv.config();

interface Config {
  mnemonic: string;
}

const getConfig = (): Config => {
  const { MNEMONIC } = process.env;
  if (!MNEMONIC) {
    throw new Error("Create .env from .env-example and set MNEMONIC env");
  }

  return {
    mnemonic: MNEMONIC,
  };
}

export const config = getConfig();
