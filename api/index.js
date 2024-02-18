import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from '../api/routes/user.route.js';
import authRoute from '../api/routes/auth.route.js';
import cors from 'cors';
const app = express();

app.use(express.json());
dotenv.config();
// app.use(cors());
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
