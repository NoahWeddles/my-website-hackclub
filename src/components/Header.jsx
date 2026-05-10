import { useState } from 'react'

function Header() {

    return (
        <>
            <div className='w-full h-12 bg-gray-950 border-b-4 border-gray-900 text-gray-200 font-mono flex items-center justify-between text-lg p-5'>
                <h1>NW</h1>
                <div className='flex gap-5'>
                    <a href='https://www.instagram.com/noahweddles/' className='hover:text-gray-400 bg-gray-900 rounded-full flex justify-center items-center w-8 h-8 drop-shadow-gray-100'>Ig</a>
                </div>
            </div>
        </>
    )
}

export default Header
