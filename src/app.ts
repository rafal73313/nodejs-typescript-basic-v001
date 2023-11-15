import express, { urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { routerRoot } from './routes/index.js';
import { logger } from './utils/logger.js';
import { connectToDb } from './db.js';
import { configDotenv } from 'dotenv';
configDotenv();

const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

let dbClient: any;

connectToDb((client, err) => {
  if (!err) {
    app.listen(process.env.PORT, () => {
      logger.info(`Listening on port: ${process.env.PORT}`);
    });
    dbClient = client;
  }
});

app.get('/books', async (req, res) => {
  logger.info('reached /books endpoint...');
  try {
    await dbClient.connect();
    const database = dbClient.db(process.env.DB_NAME);
    const books = database.collection(process.env.DB_TABLE);
    const titles = await books
      .find({}, { projection: { _id: 0, title: 1 } })
      .toArray();
    res.status(200).json({ data: titles.map((book: any) => book.title) });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'error occurred!' });
  } finally {
    await dbClient.close();
  }
});

app.use('/api', routerRoot);
