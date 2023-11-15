import { Router } from 'express';

export const routerUser = Router();

routerUser.get('/users', (req, res) => {
  res.status(200).json({ message: 'everything ok at /users!!!' });
});
