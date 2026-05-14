import { useState } from 'react'
import ig from '../assets/ig.png'

function Header() {

    return (
        <>
            <div className='w-full h-12 bg-gray-950 border-b-4 border-gray-900 text-gray-200 font-mono flex items-center justify-between text-lg p-5'>
                <h1>NW</h1>
                <div className='flex gap-5'>
                    <a href='https://www.instagram.com/noahweddles/' className='hover:text-gray-400 bg-gray-900 rounded-full transition-all cursor-none flex hover:scale-85 justify-center items-center w-6 h-6 drop-shadow-gray-100'><img src={ig} alt="Instagram" /></a>
                </div>
            </div>
        </>
    )
}

export default Header
