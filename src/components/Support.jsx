import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import supportimg from '../img/support.jpg'

function Support() {
    return (
        <div className='w-full '>
            <div className='w-full h-[700px] bg-gray-900/70 absolute'>
                <img src={supportimg} alt="" className='w-full h-full object-cover mix-blend-overlay' />
            </div>
            <div className=' max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='pt-8 text-slate-200 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum possimus repellendus dolorem. Cupiditate molestiae,</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 relative gap-x-2 gap-y-16 px-4 pt-12 sm:pt-20'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-400 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6 text-black'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus blanditiis consequuntur optio neque! Porro consequatur</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-400 cursor-pointer'>Contact to <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-400 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6 text-black'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus blanditiis consequuntur optio neque! Porro consequatur</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-400 cursor-pointer'>Contact to <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <SupportIcon className='w-16 p-4 bg-indigo-400 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6 text-black'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus blanditiis consequuntur optio neque! Porro consequatur</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-400 cursor-pointer'>Contact to <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
