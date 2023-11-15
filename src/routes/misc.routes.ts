import { Router } from 'express';

export const routerMisc = Router();

routerMisc.get('/misc', (req, res) => {
  res.status(200).json({ message: 'everything ok at /misc!!!' });
});
