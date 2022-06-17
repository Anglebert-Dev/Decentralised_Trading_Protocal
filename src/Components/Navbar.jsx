import React from 'react'
import {AiOut} from 'react-icons'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div>
                    <h1 className='text-[color:var(--primary-color)]'>DEFI</h1>
                </div>
            <div>
                <ul className='flex text-white items-center'>
                    <li>Platform</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='ml-4'>Use Defi</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar