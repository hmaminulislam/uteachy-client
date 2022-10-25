import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
  const { loginWithEmailPassword, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  //Login form button handle
  const submitbtnHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  //google sign in button handle
  const googleBtnHandle = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
    })
    .catch((e) => console.log(e));
  }
  //github sign in button handle
  const githubBtnHandle = () => {
    githubSignIn()
    .then(result => {
      console.log(result.user)
    })
    .catch(e => console.log(e))
  }
  return (
    <div className="flex justify-center pt-10">
      <div className="card w-full max-w-sm shadow-2xl bg-zinc-100">
        <form onSubmit={submitbtnHandle} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <div className="text-center mt-2">
              <span>Don't have an account? </span>
              <Link to="/register" className="text-emerald-600 font-semibold">
                Please Register
              </Link>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="flex justify-center mb-8">
          <button onClick={googleBtnHandle} className="mr-4">
            <FaGoogle className="text-3xl text-green-500"></FaGoogle>
          </button>
          <button onClick={githubBtnHandle}>
            <FaGithub className="text-3xl text-gray-800"></FaGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;