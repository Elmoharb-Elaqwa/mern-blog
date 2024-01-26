import express from 'express';
import { testFunc } from '../controller/user.controller.js';
const router = express.Router();

router.get('/test', testFunc);

export default router;
