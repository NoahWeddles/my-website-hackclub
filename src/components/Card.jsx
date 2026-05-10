import { useState } from 'react'

function Card({component}) {

    return (
        <>
            <div className='w-96 h-48 bg-gray-950 outline-4 rounded-xl outline-gray-900 shadow-lg shadow-gray-900'>
                {component}
            </div>
        </>
    )
}

export default Card
