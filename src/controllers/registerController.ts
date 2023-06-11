import { Request, Response } from 'express';
import { query } from '../db/query';

async function registerUser(req: Request, res: Response) {
    const queryString = "SELECT * FROM users;"
    const result = await query(queryString);
    console.log(result);
    return res.status(201).send("Registered!");
}

export default { registerUser };