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
import ProgrammingCard from './components/cards/ProgrammingCard'
import InvincibleCard from './components/cards/InvincibleCard'

function App() {
    return (
        <>
            <div className='cursor-none scroll-smooth'>
                <CoolCursor />
                <div className='flex sticky flex-col gap-10 items-center font-mono text-gray-100 justify-start h-screen w-full bg-gray-950'>
                    <Header />
                    <div className='w-full flex flex-col items-start gap-5 justify-center pl-10'>
                        <Title />
                    </div>
                    <WaveEffect />
                </div>
                <div className='WHAT IS THIS flex flex-col items-center pt-5 px-20 justify-start h-200 w-full gap-10 bg-gray-950'>
                    <div className='min-w-0 mx-40s h-300 w-full p-10 from-gray-900 to-gray-950 bg-radial outline-1 rounded-xl outline-gray-900 shadow-md'>
                        <AboutMeTitle />
                        <div>
                            <p className='text-2xl text-gray-300 mt-5'>
                                I'm Noah, a software developer with a passion for web development, and making other fun pieces of software.
                            </p>
                            <h1 className='text-3xl font-bold text-gray-300 mt-5'>
                                Tech Stack
                            </h1>
                            <TechStackCarousel />
                            <p className='text-2xl text-gray-300 mt-5'>
                                Im a sophomore in high school, and I have been programming for about 2 years. I have experience with a variety of programming languages, including JavaScript, Python, and C#. I love developing in react, and I have made a good amount of projects in it. I also have ample experience with the Unity game engine, and Minecraft modding.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center pt-5 px-20 justify-start h-200 w-full gap-10 bg-gray-950'>
                    <div className='min-w-0 mx-40 h-300 w-full flex p-10 from-gray-900 to-gray-950 bg-radial outline-1 rounded-xl outline-gray-900 shadow-md'>
                        <div className='flex-col flex justify-start items-center'>
                            <InterestsTitle />
                                <p className='text-2xl text-gray-300 mt-5 max-w-50'>
                                    Learn more about me through my personal interests
                                </p>
                        </div>
                        <CardContainer components={[<TrackCard />, <FactorioCard />, <ProgrammingCard />, <InvincibleCard />]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
