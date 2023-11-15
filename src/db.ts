import { configDotenv } from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { logger } from './utils/logger.js';
configDotenv();

const client = new MongoClient(process.env.DB_URL!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export const connectToDb = async (callback: (db: any, error: any) => any) => {
  try {
    callback(client, null);
  } catch (err) {
    logger.error(err);
    callback(null, err);
  }
};
