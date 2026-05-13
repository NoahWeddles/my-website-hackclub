import { motion } from "motion/react"

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

function Card({ component }) {
    return (
        <motion.div
            variants={cardVariants}
            className='card w-150 h-80 bg-gray-950 outline-1 rounded-xl outline-gray-900 shadow-md'
        >
            {component}
        </motion.div>
    )
}

export default Card