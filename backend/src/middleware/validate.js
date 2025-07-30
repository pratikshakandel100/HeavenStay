import { body } from 'express-validator';

export const userValidationRules = (role) => {
  let base = [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digits'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) throw new Error('Passwords do not match');
      return true;
    }),
    body('termsAccepted').equals('true').withMessage('You must accept the terms')
  ];

  if (role === 'owner') {
    base.push(
      body('hotelName').notEmpty().withMessage('Hotel name is required'),
      body('hotelAddress').notEmpty().withMessage('Hotel address is required')
    );
  }

  return base;
};
