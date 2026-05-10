import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

function CoolCursor() {
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
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 border-2 border-gray-100 rounded-full pointer-events-none z-50"
            style={{ x, y }}
        />
    )
}
export default CoolCursor