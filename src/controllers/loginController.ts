import { Request, Response } from 'express';

async function authorizeUser(req: Request, res: Response) {
    return res.status(200).send("OK!");
}

export default { authorizeUser };