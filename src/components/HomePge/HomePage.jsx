import React, { useState } from 'react'
import SideBar  from '../SideBar/SideBar';
import Table from '../Table/Table';
import { data } from '../../data';
const HomePage = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('DarkMode'));
    const handleToogle = () =>{
        const newDarkMode = !darkMode;
        localStorage.setItem('DarkMode', newDarkMode.toString());
        setDarkMode(newDarkMode);
    }
    const [isTable, setIsTable] = useState(false);

    const OnUpload = () => {
        setIsTable(!isTable);
    }


    return (
        <>
            <div class="flex h-screen ">
                <SideBar handleToogle ={handleToogle} isOn={darkMode}/>
  
                <div class={`flex flex-col flex-1 overflow-y-auto ${darkMode ? 'bg-black text-white' : 'bg-grey-500'} `}>
                    <div class='p-4' >
                        <h1 class={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Upload CSV</h1>
                    </div>
                    <div class='h-full flex items-center justify-center ' >
                        <div className="bg-white w- rounded-md shadow-md p-8  w-full max-w-md flex flex-col items-center justify-center w-1/2 ">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative w-96 h-52 rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                                    <img
                                        src="https://www.svgrepo.com/show/373589/excel.svg"
                                        alt="Excel icon"
                                        className="w-8 h-8"
                                    />
                                    <div>
                                    {!isTable ? <p className="mt-4 text-sm text-gray-500">
                                          Drop your excel sheet here or{' '} 
                                            <a href="#" className="text-blue-500 underline border-0" >
                                          browse
                                          </a>
                                        </p> :<p className="mt-4 text-sm text-gray-500">
                                  
                                            <a href="#" className="text-red-500 underline border-0" >
                                         Remove
                                          </a>
                                        </p>}
                                    </div>


                                </div>

                            </div>
                            <button onClick={OnUpload} className="flex items-center justify-center mt-6 px-6 py-2 rounded-md bg-[#605BFF] text-white font-medium w-full flex items-center justify center">
                                <span className="flex items-center justify-center">
                                    {!isTable ? <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 012 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg> : <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1.43262" width="17" height="17" rx="8.5" stroke="url(#paint0_angular_22_3041)" stroke-width="2" />
                                        <defs>
                                            <radialGradient id="paint0_angular_22_3041" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.5 9.93262) rotate(90) scale(9.5)">
                                                <stop offset="0.482539" stop-color="white" />
                                                <stop offset="0.482639" stop-color="white" stop-opacity="0" />
                                                <stop offset="0.612852" stop-color="white" stop-opacity="0" />
                                                <stop offset="0.612952" stop-color="white" />
                                            </radialGradient>
                                        </defs>
                                    </svg>}

                                    {!isTable ? "Upload" :''}
                                </span>
                            </button>
                        </div>

                    </div>
                    {isTable ? <Table data ={data} /> : <span></span>}
                </div>
            </div>

        </>
    )
}

export default HomePage