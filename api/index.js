import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from '../api/routes/user.route.js';
import authRoute from '../api/routes/auth.route.js';
const app = express();

app.use(express.json());
dotenv.config();
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
