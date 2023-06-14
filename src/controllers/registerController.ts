import { Request, Response } from 'express';
import { query } from '../db/query';

async function registerUser(req: Request, res: Response) {
    // Time to register a user
    const newUsername = req.body.username;
    const newPassword = req.body.password;
    // Check if user already exists in DB

    // Hash password and store in DB

    // Reply to client
    return res.status(201).send("Registered!");
}

export default { registerUser };