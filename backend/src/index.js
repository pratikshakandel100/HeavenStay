import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRoutes from './routes/registerRoutes.js';
import { db } from './config/database.js';
import loginRoutes from './routes/loginRoutes.js'

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize database connection
db();

// ONLY ONE ROUTE - Registration
app.use('/api/users', registerRoutes);
app.use("/api/login", loginRoutes);



// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});






































