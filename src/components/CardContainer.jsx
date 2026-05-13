import Card from "./Card"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5
        }
    }
}

export default function CardContainer({ components }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div
            ref={ref}
            className='card_container flex items-center justify-center w-full flex-wrap gap-2'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
        >
            {components.map((component, index) => (
                <Card key={index} component={component} />
            ))}
        </motion.div>
    )
}