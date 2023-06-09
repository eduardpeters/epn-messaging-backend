import { Request, Response } from 'express';

async function registerUser(req: Request, res: Response) {
    return res.status(201).send("Registered!");
}

export default { registerUser };