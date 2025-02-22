import { NavLink } from "react-router";


const Login = () => {


    return (
        <div className="items-center justify-center flex h-screen">
            <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-4xl text-center font-semibold">Login Now</h2>
            <div className="card-body w-full">
                <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <div>
                    <a >Don&apos;t have an account ? </a><NavLink to='/registration'> Registration</NavLink>
                </div>
            </div>
            </div>
        </div>
    );
};


export default Login;