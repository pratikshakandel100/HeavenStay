import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './config/database.js';;
import authRouter from './routes/authRoute.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT =  3001;


// Middleware
app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize database connection
db();

// ONLY ONE ROUTE - Registration
app.use('/api/auth', authRouter)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});






































