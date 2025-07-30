import express from 'express';
import { register } from '../controllers/authController.js';
import { userValidationRules } from '../middleware/validate.js';

import { loginGuest, loginHotelOwner } from '../controllers/authController.js';
import {restrictTo, protect} from '../middleware/protect.js';


const router = express.Router();

router.post('/guest/register', userValidationRules('guest'), register);
router.post('/owner/register', userValidationRules('owner'), register);

router.post('/guest/login', loginGuest);
router.post('/owner/login', loginHotelOwner);

router.get('/guest-only', protect, restrictTo('guest'), (req, res) => {
  res.json({ message: `Welcome, guest ${req.user.firstName}` });
});

router.get('/owner-only', protect, restrictTo('owner'), (req, res) => {
  res.json({ message: `Welcome, hotel owner ${req.user.firstName}` });
});

export default router;
