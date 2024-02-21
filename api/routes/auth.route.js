import express from 'express';
import { getUsers, signin, signup } from '../controller/auth.controller.js';
const router = express.Router();

router.post('/signup', signup);
router.get('/getUsers', getUsers);
router.post('/signin', signin);

export default router;
