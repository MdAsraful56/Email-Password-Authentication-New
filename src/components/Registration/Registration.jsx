import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from './../../firebase.init';
import { useState } from "react";
import { Link } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Registration = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    // react tost 
    const notify = () => {
        success ? toast.error("Registration Failed") : toast.success("Registration Success");
    };



    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registration form submitted');

        // reset status 
        setError('');
        setSuccess(false);

        // console.log(e.target[0].value);

        const username = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        const password = e.target[3].value;

        console.log(username, phone);
        // console.log(username, email, phone, password);




        // create user with email & password 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);

                // send email verification 
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Email verification sent');
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                        setSuccess(false);
                    });

                    // update profile name & photo url 
                    const profile = {
                        displayName: username,
                    }
                    updateProfile(auth.currentUser, profile)
                        .then(()=> {})
                        .catch(error => {
                            console.log(error);
                        })

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess(false);
            });

    }


    return (
        <div className="text-center max-w-xl mx-auto">
            <h1 className="text-center text-4xl justify-center items-center my-7">Registration</h1>
            <form onSubmit={handleRegister} >
                {/* UserName  */}
                <label className="input validator my-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*"  title="Only letters, numbers or dash" />
                </label>
                {/* Email */}
                <label className="input validator my-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" placeholder="mail@site.com" required/>
                </label>
                {/* Phone Number  */}
                <label className="input validator my-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none"><path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z" fill="currentColor"></path></g></svg>
                    <input type="tel" className="tabular-nums" required placeholder="Phone" pattern="[0-9]*" title="Must be 10 digits" />
                </label>
                {/* Password */}
                <label className="input validator my-2 relative">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input type={showPassword ? 'text' : 'password' } required placeholder="Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                    <button type="button" onClick={()=>{setShowPassword(!showPassword)}}  className="btn absolute btn-xs right-2 top-2">
                        {showPassword ? <FaEyeSlash /> : <FaEye /> }
                    </button>
                </label> <br />
                <label  className=" flex items-center justify-center">
                    <input type="checkbox" className="checkbox" />
                    <span className="ml-2">I agree to the <a className="link link-hover">terms and conditions</a></span>
                </label> <br />
                {/* Registration Button */}
                <button onClick={notify} type="submit" name="btn" className="btn rounded-lg btn-primary w-1/2 my-2">Register</button>
            </form>
            <div className="mt-2">
                <p>You have a Account ? <Link to='/login'>Login</Link> </p>
            </div>
            {
                error && <div className="text-red-500 text-2xl">{error}</div>
            }
            <ToastContainer />
        </div>
    );
};

export default Registration;