import { DataTypes } from 'sequelize';
import {sequelize }from '../config/database.js'

const User = sequelize.define('User', {
  role: {
    type: DataTypes.ENUM('guest', 'owner'),
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [10, 10] }
  },
  hotelName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hotelAddress: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default User;
