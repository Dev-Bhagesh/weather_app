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
            <div className=' m-2 flex justify-around w-screen'>
                <div className='p-0.5 flex gap-2 w-2/4'>
                    <input className="p-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500 focus:border-blue-500 flex-[3] justify-around navbar border h-12 rounded-2xl hover:scale-103 hover:shadow-2xl bg-white/10 backdrop-blur-lg" placeholder='Enter the City' value={city} onChange={inputHandler} name='city' />
                    <button className='border hover:border-blue-500 flex-[1] rounded-2xl font-bold text-3xl cursor-pointer hover:shadow-2xl hover:scale-103 duration-500  bg-white/10 backdrop-blur-lg' onClick={wether}>Go</button>
                </div>
            </div>
            <Card data={data} />
        </div>
            </>
    )
}

export default Navbar
