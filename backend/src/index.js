import express from 'express';
import dotenv from 'dotenv';
import {db, sequelize} from './config/database.js';
import cors from 'cors';


// import route
import authRoutes from './routes/authRoute.js';



dotenv.config();

db()
const app = express();
app.use(cors());
app.use(express.json());



//use auth
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


































