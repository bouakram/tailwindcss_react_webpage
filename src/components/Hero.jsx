import React from 'react'
import {CloudUploadIcon,DatabaseIcon,PaperAirplaneIcon,ServerIcon} from '@heroicons/react/solid'
import Bgimg from '../img/cyber-bg.png'

function Hero() {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid sm:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center items-center sm:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Unique Sequincing & Production</p>
                    <h1 className='py-3 text-4xl sm:text-6xl font-bold'>Cloud Managment</h1>
                    <p className='text-wxl'>This is our Tech Brand.</p>
                    <button className='my-2'>Get Started</button>
                </div>
                <div>
                    <img src={Bgimg} alt="" srcset="" />
                </div>
                <div className='bg-zinc-200 flex flex-col justify-between items-center space-y-2 border p-5 mt-4 rounded-lg drop-shadow-lg sm:relative sm:left-1/2'>
                    <p>Data Servicesse</p>
                    <div className='flex flex-col sm:flex-row space-x-2'>
                        <p className='flex py-2 px-2 text-gray-500'><CloudUploadIcon className="h-6 text-indigo-500" /> App Security</p>
                        <p className='flex py-2 px-2 text-gray-500'><DatabaseIcon className="h-6 text-indigo-500" /> Dashboard Design</p>
                        <p className='flex py-2 px-2 text-gray-500'><ServerIcon className="h-6 text-indigo-500" /> Cloud Data</p>
                        <p className='flex py-2 px-2 text-gray-500'><PaperAirplaneIcon className="h-6 text-indigo-500" /> API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero