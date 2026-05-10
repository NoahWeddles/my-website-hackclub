import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { col, q } from 'motion/react-client'
import { create } from 'zustand'

function getVisibleSize(camera, distance) {
    const vFOV = THREE.MathUtils.degToRad(camera.fov)
    const height = 2 * Math.tan(vFOV / 2) * distance
    return { height, width: height * camera.aspect }
}

const dummy = new THREE.Object3D()

const useStore = create((set) => ({
    mouseWorld: null,
    setMouseWorld: (point) => set({ mouseWorld: point }),
}))

function Dots({ count = 100, color, fn, speed = 1, radius, period, amplitude}) {
    const ref = useRef()
    const { camera } = useThree()
    const time = useRef(0)

    const offsets = useMemo(
        () => Float32Array.from({ length: count }, (_, i) => (i / count) * Math.PI * 2 * 3),
        [count]
    )

    const mouseDown = useRef(false)

    useEffect(() => {
        const handleMouseDown = (event) => {
            mouseDown.current = true
        }
        const handleMouseUp = (event) => {
            mouseDown.current = false
        }

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const baseColor = new THREE.Color(color)

    useFrame((_, delta) => {
        const { width, height } = getVisibleSize(camera, 5)
        time.current += delta * speed

        const c = new THREE.Color()
    
        for (let i = 0; i < count; i++) {
            const mouseWorld = useStore.getState().mouseWorld

            const phase = time.current + offsets[i]

            const rawX = (phase / (Math.PI * 2 * 3)) * width
            let y = amplitude*fn(period*phase) * (height / 4)

            let screenX = ((rawX % width) + width) % width - width / 2

            // if (mouseDown.current) {
            let dx = mouseWorld ? mouseWorld.x - screenX : 0
            let dy = mouseWorld ? mouseWorld.y - y : 0

            let angle = Math.atan2(dy, dx)

            let distance = Math.sqrt(dx * dx + dy * dy)

            let attraction = Math.min(1, 1 / (distance * distance)) / 25
            screenX += Math.cos(angle) * attraction
            y += Math.sin(angle) * attraction
            // }


            
            const t = (amplitude * fn(time.current*5+period * phase) + 1)+1
            c.setRGB(
                baseColor.r * t,
                baseColor.g * t,
                baseColor.b * t,
            )

            ref.current.setColorAt(i,c)

            dummy.position.set(screenX, y, 0)
            dummy.updateMatrix()
            ref.current.setMatrixAt(i, dummy.matrix)
        }

        ref.current.instanceMatrix.needsUpdate = true
        ref.current.instanceColor.needsUpdate = true
    })

    return (
        <instancedMesh ref={ref} args={[null, null, count]}>
            <sphereGeometry args={[radius]} />
            <meshStandardMaterial color={color} />
        </instancedMesh>
    )
}

function MyMesh() {
    const setMouseWorld = useStore((s) => s.setMouseWorld)
    return (
        <mesh onPointerMove={(e) => setMouseWorld(e.point.clone())}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial visible={false} />
        </mesh>
    )
}

function Scene() {
    return (
        <>
            <MyMesh />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Dots count={80} color="rgb(165, 78, 119)" fn={Math.sin} amplitude={1} period={1} radius={0.02} speed={1} />
            <Dots count={80} color="rgb(64, 55, 150)" fn={Math.cos} amplitude={1} period={1} radius={0.02} speed={1} />
        </>
    )
}

export default function ThreeDCanvas() {
    return (
        <Canvas
        camera={{ fov: 30 }} className="bg-transparent">
            <Scene />
        </Canvas>
    )
}