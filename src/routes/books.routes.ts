import { Request, Response, Router } from 'express';

export const routerBooks = Router();

routerBooks.get('/books', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'evrything ok at /books' });
});
