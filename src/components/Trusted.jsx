import React from 'react'

function Trusted() {
    return (
        <div className=' bg-white flex flex-col items-center justify-center space-y-10 px-2 py-16'>
            <div className='space-y-2 text-center'>
            <h1 className='font-bold text-4xl'>Trusted by developers across the world</h1>
            <p className='text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia nemo illo atque blanditiis cum ducimus doloribus enim rerum</p>
            </div>
            <ul className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6'>
                <li className='cursor-pointer border rounded-lg px-6 py-2 text-center shadow-lg'><h3 className='text-4xl font-bold text-indigo-400'>100%</h3><p className='font-light text-sm text-gray-500'>completion</p></li>
                <li className='cursor-pointer border rounded-lg px-6 py-2 text-center shadow-lg'><h3 className='text-4xl font-bold text-indigo-400'>24/27</h3><p className='font-light text-sm text-gray-500'>delevry</p></li>
                <li className='cursor-pointer border rounded-lg px-6 py-2 text-center shadow-lg'><h3 className='text-4xl font-bold text-indigo-400'>100K</h3><p className='font-light text-sm text-gray-500'>transaction</p></li>
            </ul>
        </div>
    )
}

export default Trusted