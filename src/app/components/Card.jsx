'use client'
import { useState } from "react";
import React from "react";

function Card({ data }) {

    // const [data,setWdata] = useState(wdata)
    return (
        <>
            <div className="flex justify-around mt-10">

                {data.name ? (

                    <section className=" card w-2/4 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all text-white duration-500 hover:scale-105 cursor-pointer">
                        <div className="grid grid-cols-3 gap-4 p-5
                        ">
                            <div className="country  flex justify-center items-center rounded-2xl ">
                                <h1>{data.name} , {data.sys.country} 🌍</h1>
                            </div>
                            <div className="temp  flex justify-center items-center rounded-2xl ">
                                <h2>Temperature - {data.main.temp} °C 🌡</h2>
                            </div>
                            <div className="condition  flex justify-center items-center rounded-2xl ">
                                <p>Wether - {data.weather[0].description}</p>
                            </div>
                            <div className="humidity  flex justify-center items-center rounded-2xl ">
                                <p>Humidity - {data.main.humidity}% 💧</p>
                            </div>
                            <div className="windspeed  flex justify-center items-center rounded-2xl ">
                                <p>Wind Speed - {data.wind.speed} m/s</p>
                            </div>
                            <div className="icon  flex justify-center items-center rounded-2xl ">
                                <img className="" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Icon" />
                            </div>
                        </div>
                    </section>
                ) : (
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