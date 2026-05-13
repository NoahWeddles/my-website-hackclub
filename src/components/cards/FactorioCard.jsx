import img from '../../assets/factorio.png'
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

function FactorioCard() {

    return (
        <>
            <div className='p-5 text-gray-200 gap-0 font-mono flex flex-col items-start justify-start'>
                <h1 className='text-lg'>Factorio</h1>
                <hr className=" bg-gray-900 border-gray-900 border w-full mb-5"></hr>
                <div className='flex items-start justify-between  gap 10'>
                    <div className='text-left text-xs mr-6'>
                        <p>I like playing factorio. <br /><strong>(This is my base on my new save)</strong></p>
                    </div>
                    <img className="z-0 w-25 rounded-lg animate-wiggle active:scale-400 hover:border-2 active:animate-none transition-all" src={img} alt="Factorio Image" />
                </div>
            </div>
        </>
    )
}

export default FactorioCard
