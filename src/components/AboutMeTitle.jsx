import { motion } from "motion/react"
const titleVariants = 
{
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function AboutMeTitle() {

    return (
        <motion.h1
            className='title text-5xl font-archivo opacity-0 bg-linear-to-r from-rose-500 to-indigo-600 bg-clip-text b text-transparent'
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
            initial
        >
            About Me
        </motion.h1>
    );
}