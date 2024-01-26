import express from 'express';
import { getUsers, signup } from '../controller/auth.controller.js';
const router = express.Router();

router.post('/signup', signup);
router.get('/getUsers', getUsers);

export default router;
