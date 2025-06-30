import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  "heavenstay_db",
  "postgres",
  "root",
  {
    host: "localhost",// use .env port if not default
    dialect: 'postgres',       // you can change to 'mysql', etc.
    logging: false,            // set true if you want to see SQL queries in console
  }
);

export const db = async () => {
  try {
    await sequelize.authenticate();  // checks DB connection
    await sequelize.sync({ alter: true }); // updates tables if needed
    console.log('✅ Database connected and synced successfully');
  } catch (error) {
    console.error('❌ Failed to connect or sync database:', error);
    process.exit(1); // stop server if DB fails
  }
};
