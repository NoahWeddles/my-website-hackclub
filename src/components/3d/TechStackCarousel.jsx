import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { col, q } from 'motion/react-client'
import { create } from 'zustand'
import { useTexture } from '@react-three/drei'
import viteImg from '../../assets/vite.png'
import jsImg from '../../assets/js.png'
import reactImg from '../../assets/react.png'
import threeImg from '../../assets/three.png'
import tailwindImg from '../../assets/tailwind.png'
import pythonImg from '../../assets/python.png'
import csImg from '../../assets/cs.png'

function getVisibleSize(camera, distance) {
    const vFOV = THREE.MathUtils.degToRad(camera.fov)
    const height = 2 * Math.tan(vFOV / 2) * distance
    return { height, width: height * camera.aspect }
}

const dummy = new THREE.Object3D()

function ImageMesh({ url, meshRef }) {
    const texture = useTexture(url)

    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 16
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.NearestFilter
    texture.generateMipmaps = true

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[1.5, 1.5]} />
            <meshBasicMaterial
                map={texture}
                toneMapped={false}
            />
        </mesh>
    )
}

const useStore = create((set) => ({
    mouseWorld: null,
    setMouseWorld: (point) => set({ mouseWorld: point }),
}))

function MyMesh() {
    const setMouseWorld = useStore((s) => s.setMouseWorld)
    return (
        <mesh onPointerMove={(e) => setMouseWorld(e.point.clone())}>
            <planeGeometry args={[150, 150]} />
            <meshBasicMaterial visible={false} />
        </mesh>
    )
}

function Images({ urls, speed=1 }) {
    const refs = useRef([])
    const { camera } = useThree()
    const time = useRef(0)

    const offsets = useMemo(
        () => Float32Array.from({ length: urls.length }, (_, i) => (i / urls.length) * Math.PI * 2 * 3),
        [urls.length]
    )

    useFrame((_, delta) => {
        const { width, height } = getVisibleSize(camera, 5)
        time.current += delta * speed
        const mouseWorld = useStore.getState().mouseWorld
        for (let i = 0; i < urls.length; i++) {

            const phase = -1 * (Math.sin(time.current*3)+time.current*2 + offsets[i])

            const rawX = (phase / (Math.PI * 2 * 3)) * width

            let screenX = ((rawX % width) + width) % width - width / 2
            let y = Math.cos(phase*5) * height * 0.02

            let dx = mouseWorld ? mouseWorld.x - screenX : 0
            let dy = mouseWorld ? mouseWorld.y - y : 0

            let angle = Math.atan2(dy, dx)

            let distance = Math.sqrt(dx * dx + dy * dy)

            let attraction = Math.min(1, 1 / (distance * distance * distance)) / 10
            screenX += Math.cos(angle) * attraction
            y += Math.sin(angle) * attraction

            refs.current[i].position.set(screenX, y, 0)
        }
    })

    return (
        <>
            {urls.map((url, i) => (
                <ImageMesh
                    key={i}
                    url={url}
                    meshRef={el => (refs.current[i] = el)}
                />
            ))}
        </>
    )
}



function Scene() {
    const urls = [
        viteImg,
        jsImg,
        threeImg,
        reactImg,
        tailwindImg,
        pythonImg,
        csImg,
    ]

    return (
        <>
            <MyMesh />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Images urls={urls} />
        </>
    )
}

export default function TechStackCarousel() {
    return (
        <Canvas
            camera={{ fov: 30 }}
            gl={{
                outputColorSpace: THREE.SRGBColorSpace,
            }}
            className="bg-transparent"
        >
            <Scene />
        </Canvas>
    )
}