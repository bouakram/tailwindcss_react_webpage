import React from 'react'
import {FaGithub ,FaFacebook ,FaTwitter ,FaInstagram ,FaTwitch} from 'react-icons/fa'
function Footer(){
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-6 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
    <div>
    <h6 className='font-bold uppercase pt-2'>Solution</h6>
    <ul>
    <li className='py-1'>Marketing</li>
    <li className='py-1'>Anaistics</li>
    <li className='py-1'>Comerc</li>
    <li className='py-1'>Data</li>
    <li className='py-1'>Cloud</li>
    </ul>
    </div>
    <div>
    <h6 className='font-bold uppercase pt-2'>Support</h6>
    <ul>
    <li className='py-1'>Marketing</li>
    <li className='py-1'>Anaistics</li>
    <li className='py-1'>Comerc</li>
    <li className='py-1'>Data</li>
    <li className='py-1'>Cloud</li>
    </ul>
    </div>
    <div>
    <h6 className='font-bold uppercase pt-2'>Company</h6>
    <ul>
    <li className='py-1'>Marketing</li>
    <li className='py-1'>Anaistics</li>
    <li className='py-1'>Comerc</li>
    <li className='py-1'>Data</li>
    <li className='py-1'>Cloud</li>
    </ul>
    </div>
    <div>
    <h6 className='font-bold uppercase pt-2'>Legal</h6>
    <ul>
    <li className='py-1'>Marketing</li>
    <li className='py-1'>Anaistics</li>
    <li className='py-1'>Comerc</li>
    <li className='py-1'>Data</li>
    <li className='py-1'>Cloud</li>
    </ul>
    </div>
    <div className='col-spam-w pt-8 md:pt-2'>
     <p>Subscribe to our newslatter</p> 
    <p>The latest news, articles , and resources , sent to your inbox weekly.</p>
    <form>
    <input type='email' />
    <buttom>Subscribe</buttom>
    </form>
    </div>
    </div> 
    <div>
    <p>2022 Workflow, LLC. All rights reserved</p>
    <div>
    <FaFacebook />
    <FaGithub />
    <FaTwitter />
    <FaInstagram />
    <FaTwitch />
    </div>
    </div>
    </div>
  );
}

export default Footer
