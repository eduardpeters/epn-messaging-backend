import express from 'express';
import loginController from '../controllers/loginController';
import { checkLoginBody } from '../middleware/validation';

const router = express.Router();

router.post('/', checkLoginBody,loginController.authorizeUser);

export default router;