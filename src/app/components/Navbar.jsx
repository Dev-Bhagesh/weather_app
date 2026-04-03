'use client'
import { useState } from 'react'
import React from 'react'
import Card from './Card'
import getWetherData from '../service/api'

function Navbar() {
    const [city,setCity] = useState("")

    const [data, setData] = useState({})

    const wether = async () =>{
        let data = await getWetherData(city)
        setData(data)
    }

    const inputHandler=(e)=>{
        setCity(e.target.value)
    }

    return (
        <>
            <div className=' m-2 flex justify-around w-screen'>
                <div className='p-0.5 flex gap-2
         w-2/4'>
                    <input className="p-2 flex-[3] justify-around navbar border h-12 rounded-2xl " placeholder='Enter the City' value={city} onChange={inputHandler} name='city'/>

                    <button className='border flex-[1] rounded-2xl font-bold text-3xl cursor-pointer' onClick={wether}>Go</button>
                </div>
            </div>
            <Card data={data}/>
        </>
    )
}

export default Navbar
