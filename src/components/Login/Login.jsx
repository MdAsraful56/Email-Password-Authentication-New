import { NavLink } from "react-router";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  


  const notify = () => {
    success ? toast.success("Login Success") : toast.error("Login Failed");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // reset status 
    setError('');
    setSuccess(false);
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    

    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result.user);
        setSuccess(true);
    })
    .catch(error => {
        console.log(error.message);
        setError(error.message);
        setSuccess(false);
    })
  }


    return (
        <div className="items-center justify-center flex h-screen">
            <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-4xl text-center font-semibold">Login Now</h2>
            <div className="card-body w-full relative">
                <form onSubmit={handleLogin} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" />
                <button className="btn btn-xs absolute right-10 top-[136px]" type="button">
                    {showPassword ? <i onClick={() => setShowPassword(false)}><FaEyeSlash /></i> : <i onClick={() => setShowPassword(true)}><FaEye /></i>}
                </button>
                <label  className=" flex items-center justify-start mt-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="ml-2">I agree to the <a className="link link-hover">terms and conditions</a></span>
                </label> <br />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button onClick={notify} className="btn btn-neutral mt-4">Login</button>
                </form>
                <div>
                    <a >Don&apos;t have an account ? </a><NavLink to='/registration'> Registration</NavLink>
                </div>
                {
                error && <div className="text-red-500 text-base">{error}</div>
                }
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};


export default Login;