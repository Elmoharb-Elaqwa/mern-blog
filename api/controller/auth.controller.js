import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (
      !username ||
      !email ||
      !password ||
      username === '' ||
      email === '' ||
      password === ''
    ) {
      res.status(400).json({ message: 'All fields are reqiured' });
    } else {
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'Welcome new user to our family' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password || email == '' || password == '') {
      res.status(400).json({ message: 'All fields are required' });
    } else {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        res.status(400).json({ message: 'Email not registered yet !' });
      } else {
        const comparedPassword = bcryptjs.compareSync(
          password,
          validUser.password
        );
        if (!comparedPassword) {
          res.status(400).json({ message: 'Wrong Credentials !' });
        } else {
          const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
          const { password: pass, ...userInfo } = validUser._doc;
          res
            .status(200)
            .cookie('access_token', token, { httpOnly: true })
            .json({ userInfo, token });
        }
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
