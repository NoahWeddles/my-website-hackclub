import { useState, useEffect, useRef } from 'react'
import { motion, animate, inView } from "motion/react"

const titleVariants =
{
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function InterestsTitle() {
    return (
        <>
            <motion.h1
                className='title text-5xl font-archivo opacity-0 bg-linear-to-r text-rose-500'
                initial="hidden"
                whileInView="visible"
                variants={titleVariants}
            >
                Interests
            </motion.h1>
        </>
    )
}
