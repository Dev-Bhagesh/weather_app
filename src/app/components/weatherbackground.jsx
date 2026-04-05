function WeatherBackground({ condition }) {

    if (condition === "Clouds") {
        return <div className="clouds"></div>
    }

    if (condition === "Rain") {
        return (
            <>
                <div className="dark-clouds"></div>
                <div className="rain"></div>
            </>
        )
    }

    if (condition === "Thunderstorm") {
        return (
            <>
                <div className="dark-clouds"></div>
                <div className="thunder"></div>
            </>
        )
    }

    return null
}

export default WeatherBackground