import React, { useState } from 'react';
import GitLogin from './GitLogin';
import GoogleLogin from './GoogleLogin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { useNavigate } from 'react-router';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleLoginSumbit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password).then((result) => {
            console.log(result);
            alert('Login Success')
            navigate('/')
        }).catch((error) => {
            console.log(error)
            alert('Login problem')
        })
        

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <form onSubmit={handleLoginSumbit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
                        <input
                            className="border p-2 rounded w-full"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block mb-1 font-semibold" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className="border p-2 rounded w-full pr-10"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-2 text-sm text-blue-500"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <div className="text-right mb-6">
                        <a href="/forgetPassword" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-400 text-sm">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="flex flex-col gap-4">
                   <button className='btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full'>  <GoogleLogin></GoogleLogin>  </button>
                    <button className='btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full'> <GitLogin /> </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
