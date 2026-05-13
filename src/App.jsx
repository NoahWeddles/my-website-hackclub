import { useState } from 'react'
import Card from './components/Card'
import TrackCard from './components/cards/TrackCard'
import Header from './components/Header'
import Title from './components/Title'
import FactorioCard from './components/cards/FactorioCard'
import CoolCursor from './components/CoolCursor'
import WaveEffect from './components/3d/WaveEffect'
import InterestsTitle from './components/InterestsTitle'
import CardContainer from './components/CardContainer'
import AboutMeTitle from './components/AboutMeTitle'
import TechStackCarousel from './components/3d/TechStackCarousel'

function App() {
    return (
        <>
            <div className='cursor-none'>
                <CoolCursor />
                <div className='flex sticky flex-col gap-10 items-center font-mono text-gray-100 justify-start h-screen w-full bg-gray-950'>
                    <Header />
                    <div className='w-full flex flex-col items-start gap-5 justify-center pl-10'>
                        <Title />
                    </div>
                    <WaveEffect />
                </div>
                <div className='flex flex-col items-center pt-5 px-20 justify-start h-200 w-full gap-10 bg-gray-950'>
                    <div className='min-w-0 mx-40 h-300 w-full p-10 bg-gray-950 outline-1 rounded-xl outline-gray-900 shadow-md'>
                        <AboutMeTitle />
                        <div>
                            <p className='text-2xl text-gray-300 mt-5'>
                                I'm Noah, a software developer with a passion for web development, and making other fun pieces of software.
                            </p>
                            <h1 className='text-3xl font-bold text-gray-300 mt-5'>
                                Tech Stack
                            </h1>
                            <TechStackCarousel />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center pt-5 px-20 justify-start h-200 w-full gap-10 bg-gray-950'>
                    <div className='min-w-0 mx-40 h-300 w-full flex p-10 bg-gray-950 outline-1 rounded-xl outline-gray-900 shadow-md'>
                        <InterestsTitle />
                        <CardContainer components={[<TrackCard />, <FactorioCard />, <TrackCard />, <FactorioCard />]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
