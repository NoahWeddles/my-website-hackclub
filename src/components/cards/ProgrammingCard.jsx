import img from '../../assets/react.png'
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export default function ProgrammingCard() {

    return (
        <>
            <div className='p-5 text-gray-200 gap-0 font-mono flex flex-col items-start justify-start'>
                <h1 className='text-xl'>Programming</h1>
                <hr className=" bg-gray-900 border-gray-900 border w-full mb-5"></hr>
                <div className='flex items-start justify-between  gap 10'>
                    <div className='text-left text-lg mr-6'>
                        <p>I enjoy programming in various languages and building cool applications. My favorite type of software to build is web applications, typically using React. I want to learn MongoDB aswell.</p>
                    </div>
                    <img className="z-0 w-25 rounded-lg animate-wiggle active:scale-400 hover:border-2 active:animate-none transition-all" src={img} alt="Programming Image" />
                </div>
            </div>
        </>
    )
}
