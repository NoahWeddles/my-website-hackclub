import { useState } from 'react'
import { motion } from "motion/react"

function Title() {

    return (
        <>
            <div className='flex flex-col justify-center items-start gap-5 w-full'>
                    <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 3, ease: "easeInOut" }}>
                        <motion.h1 className='text-8xl bg-linear-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent'>Noah Weddles</motion.h1>
                    </motion.div>
                    <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 3, ease: "easeInOut" }}>
                        <motion.h1 className='text-xl pl-5 w-150'>
                            Hey!
                            <motion.span
                                initial={{ rotate: -45 }}
                                animate={{ rotate: 90 }}
                                transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                className="inline-block"
                            >👋</motion.span>
                            &nbsp;Welcome to my personal website!
                        </motion.h1>
                    </motion.div>
            </div>
        </>
    )
}

export default Title
