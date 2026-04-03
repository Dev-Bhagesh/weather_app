'use client'
import { useState } from "react";
import React from "react";

function Card({data}) {

    // const [data,setWdata] = useState(wdata)
    return (
        <>
            <div className="flex justify-around mt-10">

                {data.name ? (

                    <section className=" card border w-2/4 p-6 shadow-lg rounded-2xl">
                        <div>
                            <h1>{data.name} , {data.sys.country} 🌍</h1>
                            <h2>Temperature - {data.main.temp} °C 🌡</h2>
                            <p>Wether Condition - {data.weather[0].description}</p>
                            <p>Humidity - {data.main.humidity}% 💧</p>
                            <p>Wind Speed - {data.wind.speed} m/s</p>
                        </div>

                        <img className="" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Icon" />
                    </section> 
                    ):(
                        <div className="card border w-2/4 p-6 shadow-lg rounded-2xl">
                        Search The City
                    </div>
                    )
                }
            </div>
        </>
    )
}
export default Card