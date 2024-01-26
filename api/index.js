import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from '../routes/user.route.js';
import authRoute from '../routes/auth.route.js';
const app = express();

app.use(express.json());
dotenv.config();
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
