import type { Request, Response, NextFunction } from 'express';
import { validateRegisterBody, validateLoginBody } from '../services/validators';

export function checkRegisterBody(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
        return res.status(400).send("No request body");
    }
    const { error } = validateRegisterBody(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
}

export function checkLoginBody(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
        return res.status(400).send("No request body");
    }
    const { error } = validateLoginBody(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
}