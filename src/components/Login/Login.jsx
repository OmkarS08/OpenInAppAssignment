import React, { useState } from 'react';
import ToogleButton from '../ToogleButton/ToogleButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleToogle = () =>{
        const newDarkMode = !darkMode;
        localStorage.setItem('DarkMode', newDarkMode.toString());
        setDarkMode(newDarkMode);
    }
    const Navigate = useNavigate();

    const handleSubmit = () => {
        Navigate('/Home');
    };

    return (
        <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
            <div className="flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                {/* Left Side */}
                <div className="hidden md:flex md:flex-col justify-between w-full md:w-1/2 bg-gradient-to-b from-[#605BFF] to-[#605BFF] text-white p-8 rounded-l-lg relative">
                    <div className="bg-[#B7E9F640] w-full h-full p-4 rounded-lg relative">
                        <div className="flex items-center mb-4">
                            <div className="bg-white rounded-full p-2">
                                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1 0h1m-1-4h.01M12 8v.01M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </div>
                            <h1 className="ml-4 text-xl font-semibold">Base</h1>
                        </div>
                        <h2 className="text-2xl font-bold mb-6">Generate detailed reports with just one click</h2>
                        <img src="img.png" alt="Person with camera" className="absolute rounded-lg w-48 mx-auto bottom-0 right-0" />
                        <div className="absolute bottom-4 left-4">
                            <ToogleButton onToggle={handleToogle} />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className={`w-full md:w-1/2 p-8 md:mx-0 ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
                    <h2 className="text-3xl font-bold mb-4">Sign In</h2>
                    <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sign in to your account</p>
                    <div className="flex space-x-4 mb-4">
                        <button className={`flex items-center justify-center w-2xl py-1 px-5 border rounded-full shadow-xs text-[0.7rem] text-nowrap font-medium ${darkMode ? 'text-gray-400 bg-gray-800 border-gray-600' : 'text-gray-700 bg-white hover:bg-gray-50'}`}>
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                            Sign in with Google
                        </button>
                        <button className={`flex items-center justify-center w-2xl py-1 px-5 border rounded-full shadow-xs text-[0.7rem] text-nowrap font-medium ${darkMode ? 'text-gray-400 bg-gray-800 border-gray-600' : 'text-gray-700 bg-white hover:bg-gray-50'}`}>
                            <img src="https://www.svgrepo.com/show/69341/apple-logo.svg" alt="Apple" className="h-5 w-5 mr-2" />
                            Sign in with Apple
                        </button>
                    </div>
                    <form className={` p-4 rounded-md sm:max-w-4/5 min-w-4/5 ${darkMode ? ' bg-gray-900  text-white ' : ' bg-white text-black'}`}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${darkMode ? 'bg-white border-gray-600 text-white focus:ring-gray-500 focus:border-gray-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="********"
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${darkMode ? 'bg-white border-gray-600 text-white focus:ring-gray-500 focus:border-gray-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <a href="#" className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'} hover:underline`}>Forgot password?</a>
                        </div>
                        <button onClick={handleSubmit} className={`w-full py-2 px-4 font-bold rounded-md ${darkMode ? 'bg-[#605BFF] text-gray-100  hover:bg-[#605BFF]' : 'bg-[#605BFF] text-white hover:bg-[#605BFF]'}`}>
                            Sign In
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm">
                        Don’t have an account? <a href="#" className={`font-medium ${darkMode ? 'text-white hover:text-gray-400' : 'text-blue-600 hover:text-blue-500'}`}>Sign up</a>
                    </p>
                    <div className="flex justify-center mt-6 space-x-4 text-gray-500">
                        <a href="#"><img src="https://www.svgrepo.com/show/330512/github.svg" alt="GitHub" className="h-6 w-6  grayscale brightness-200 invert" /></a>
                        <a href="#"><img src="https://www.svgrepo.com/show/494287/twitter-round.svg" alt="Twitter" className="h-6 w-6  grayscale brightness-200 invert " /></a>
                        <a href="#"><img src="https://www.svgrepo.com/show/494278/linkedin-round.svg" alt="LinkedIn" className={`${!darkMode ? 'h-6 w-6  grayscale brightness-full invert ' : 'h-6 w-6  grayscale brightness-200 invert' } `} /></a>
                        <a href="#"><img src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="Discord" className={`${!darkMode ? 'h-6 w-6  grayscale brightness-200 invert' : 'h-6 w-6  grayscale brightness- invert' } `} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
