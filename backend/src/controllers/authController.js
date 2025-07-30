import User from '../models/User.js';
import { validationResult } from 'express-validator';
import { hashPassword } from '../utils/hashedPassword.js';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';

// Register
export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { role, firstName, lastName, email, phone, password, hotelName, hotelAddress } = req.body;

  try {
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email already registered' });

    const hashed = await hashPassword(password);
    const user = await User.create({
      role,
      firstName,
      lastName,
      email,
      phone,
      password: hashed,
      hotelName: role === 'owner' ? hotelName : null,
      hotelAddress: role === 'owner' ? hotelAddress : null
    });

    res.status(201).json({ message: 'Registered successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//login for guest

export const loginGuest = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

  try {
    const user = await User.findOne({ where: { email, role: 'guest' } });
    if (!user) return res.status(404).json({ error: 'Guest not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });

    // 🔐 Generate token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.status(200).json({
      message: 'Guest login successful',
      token,
      user: {
        id: user.id,
        role: user.role,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};



//login for hotelOwner
export const loginHotelOwner= async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

  try {
    const user = await User.findOne({ where: { email, role: 'owner' } });
    if (!user) return res.status(404).json({ error: 'Owner not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });

    // 🔐 Generate token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.status(200).json({
      message: 'Guest login successful',
      token,
      user: {
        id: user.id,
        role: user.role,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
