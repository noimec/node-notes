import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Токен отсутствует' });

  jwt.verify(token, process.env.JWT_SECRET || 'secret' as string, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Токен недействителен' });

    req.user = decoded as { id: number; login: string };
    next();
  });
}
