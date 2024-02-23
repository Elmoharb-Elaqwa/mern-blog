import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  singInStart,
  signInSuccessfull,
  signInFailur,
} from '../redux/user/userSlice';
const Signin = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(singInStart());
    await axios
      .post('/api/auth/signin', form)
      .then((res) => {
        dispatch(signInSuccessfull(res.data));
        navigate('/');
      })
      .catch((err) => {
        dispatch(signInFailur(err.response.data.message));
      });
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-5 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Abdulrahman's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project . You can sign up with your email and
            password or with Google
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={user.loading}
            >
              {user.loading ? (
                <>
                  <Spinner></Spinner>
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Don't have an account ?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {user.error && (
            <Alert className="mt-5" color="failure">
              {user.error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
