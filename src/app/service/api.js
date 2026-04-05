const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
async function getWetherData(city) {
    // console.log(apiKey)
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    return data.json()
}
export default getWetherData
