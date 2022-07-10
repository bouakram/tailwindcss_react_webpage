import React, { useState } from 'react'
import {MenuIcon , XIcon} from '@heroicons/react/outline'

function Navbar() {
    const [nav , setNAv] = useState(false) //state to toggle the menu nav bar and the burger icon
    const toggleNav = ()=>{
        setNAv(!nav) //toggle the value of nav if it false make it true if it's true make it false
    }
    return (
        //nav bar container
        <div className='w-screen h-[80px] z-10 bg-zinc-200 sticky shadow-lg'>
            {/* nav bar content */}
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">Brand.</h1>
                    <ul className="hidden sm:flex space-x-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="hidden space-x-4 sm:flex">
                    <button className='border-none bg-transparent text-indigo-400 hover:bg-indigo-400 hover:text-white'>Sign in</button>
                    <button className='border-none bg-transparent text-indigo-400 hover:bg-indigo-400 hover:text-white'>Sign up</button>
                </div>
                {/* swich between the icons close and open */}
            {nav ? <XIcon onClick={toggleNav} className='w-5 cursor-pointer sm:hidden'/>:<MenuIcon onClick={toggleNav} className='w-5 cursor-pointer sm:hidden'/>}
            </div>

            {/* drop down menu */}
            {/* if nav is true so show the nav menu else hide it*/}
            {nav && <ul className='absolute backdrop-blur-sm z-10 bg-zinc-200/95 px-8 w-full space-y-2 divide-y-2 divide-zinc-300 sm:hidden'>
            <li className=''>Home</li>
            <li className=''>About</li>
            <li className=''>Support</li>
            <li className=''>Platforms</li>
            <li className=''>Pricing</li>
            <div className='space-y-2 flex flex-col'>
            <button className='border-none bg-transparent text-indigo-400 hover:bg-indigo-400 hover:text-white '>Sign in</button>
            <button className='border-none bg-transparent text-indigo-400 hover:bg-indigo-400 hover:text-white'>Sign up</button>
            </div>
            </ul>}
        </div>
    )
}

export default Navbar