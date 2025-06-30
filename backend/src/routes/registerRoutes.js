import express from 'express';
import {registerController} from '../controllers/registerController.js';

const router = express.Router();

// ONLY ONE ROUTE - Register new user
router.post('/register',registerController);


export default router;