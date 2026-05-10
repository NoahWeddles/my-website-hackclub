import img from '../../assets/running.png'
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

function TrackCard() {
    const rawX = useMotionValue(0)
    const rawY = useMotionValue(0)

    const x = useSpring(rawX, { stiffness: 500, damping: 20, mass: 0.1 })
    const y = useSpring(rawY, { stiffness: 500, damping: 20, mass: 0.1 })

    useEffect(() => {
        const move = (e) => {
            rawX.set(e.clientX - 4)
            rawY.set(e.clientY - 4)
        }
        window.addEventListener("mousemove", move)
        return () => window.removeEventListener("mousemove", move)
    }, [rawX, rawY])
    return (
        <>
            <div className='p-5 text-gray-200 gap-0 font-mono flex flex-col items-start justify-start'>
                <h1 className='text-lg'>Track and field</h1>
                <hr className=" bg-gray-900 border-gray-900 border w-full mb-5"></hr>
                <div className='flex items-start justify-start gap 5'>
                    <div className='text-left text-xs'>
                        <p>I run distance <b>(8/16)</b> for my high school track and field team. <br /> <i> Running is pretty awesome 🏃‍♂️</i> <br /> <strong>(I'm on the left)</strong></p>
                    </div>
                    <motion.img animate={{ x: x, y: y }} className="z-0 w-20 rounded-lg animate-wiggle active:scale-400 hover:border-2 active:animate-none transition-all" src={img} alt="Track Image" />
                </div>
            </div>
        </>
    )
}

export default TrackCard
