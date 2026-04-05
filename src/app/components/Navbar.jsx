'use client'
import { useState } from 'react'
import React from 'react'
import Card from './Card'
import getWetherData from '../service/api'
import WeatherBackground from './weatherbackground'
import './navbar.css'

function Navbar() {
    const [city, setCity] = useState("")

    const [data, setData] = useState({})

    const wether = async () => {
        let data = await getWetherData(city)
        setData(data)
    }

    const inputHandler = (e) => {
        setCity(e.target.value)
    }

    return (
        <>
        <div className='sky min-h-screen bg-gradient-to-b from-sky-900 to-blue-400 relative overflow-hidden
        '>
            <WeatherBackground condition={data?.weather?.[0]?.main} />
            <div className='flex justify-center px-4 mt-4'>
                <div className='flex flex-col sm:flex-row gap-3 w-full md:w-2/4'>
                    <input className="p-3 w-full outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 focus:border-blue-500 flex-[3] justify-around navbar border rounded-2xl hover:scale-103 hover:shadow-2xl bg-white/10 backdrop-blur-lg" placeholder='Enter the City' value={city} onChange={inputHandler} name='city' />
                    <button className='w-full sm:w-auto px-6 py-3 border hover:border-blue-500 rounded-2xl font-bold text-lg cursor-pointer hover:shadow-2xl hover:scale-103 transition-all duration-500  bg-white/10 backdrop-blur-lg' onClick={wether}>Go</button>
                </div>
            </div>
            <Card data={data} />
        </div>
            </>
    )
}

export default Navbar
