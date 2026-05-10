import { useState } from 'react'
import Card from './components/Card'
import TrackCard from './components/cards/TrackCard'
import Header from './components/Header'
import Title from './components/Title'
import FactorioCard from './components/cards/FactorioCard'
import CoolCursor from './components/CoolCursor'
import ThreeDCanvas from './components/3d/Box'

function App() {
  return (
    <>
        <div className='cursor-none'>
            <CoolCursor />
            <div className='flex flex-col gap-10 items-center font-mono text-gray-100 justify-start h-screen w-full bg-gray-950'>
                <Header />
                <div className='w-full flex flex-col items-start gap-5 justify-center pl-10'>
                    <Title />
                </div>
                <ThreeDCanvas />
            </div>
            <div className='flex items-center justify-center h-full w-full'>
                <Card component={<TrackCard />} />
                <Card component={<FactorioCard />} />
            </div>
        </div>
    </>
  )
}

export default App
