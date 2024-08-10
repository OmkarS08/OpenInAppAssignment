import React, { useState } from 'react';

const ToogleButton = ({ onToggle ,issOn }) => {
    const [isOn, setIsOn] = useState(issOn);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        onToggle(!isOn); // Notify parent component about the toggle state
    };

    return (
        <div
            onClick={toggleSwitch}
            className={`w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition duration-300 ${isOn ? 'bg-slate-950' : ''}`}
        >
            <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ${isOn ? 'translate-x-8' : 'translate-x-0'}`}
            >
                {isOn ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 3v1m0 16v1m8.66-9.66l-.707.707m-14.14 0l-.707-.707M4.22 4.22l.707.707M19.07 19.07l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2.25c5.37 0 9.75 4.38 9.75 9.75S17.37 21.75 12 21.75 2.25 17.37 2.25 12 6.63 2.25 12 2.25zM12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z"
                        />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default ToogleButton;
