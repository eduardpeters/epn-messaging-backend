import express from 'express';
import registerController from '../controllers/registerController';
import { checkRegisterBody } from '../middleware/validation';

const router = express.Router();

router.post('/', checkRegisterBody,registerController.registerUser);

export default router;