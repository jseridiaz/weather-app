import { useLocation } from 'react-router-dom'
import './Forecast.css'
import React, { useEffect, useState } from 'react'
import InfoResult from '../../Components/InfoResult/InfoResult'
import SectionContainer from '../../Components/section/SectionContainer'

const Forecast = () => {
  const location = useLocation()
  const [cityState, setCityState] = useState('')
  const [Lat, setLat] = useState('')
  const [Lon, setLon] = useState('')
  const [avgTemperature, setAvgTemperature] = useState()
  const [rainProbability, setRainProbability] = useState()
  const [humidity, sethumidity] = useState()
  const [wind, setWind] = useState()

  const { city, country, lat, lon } = history.state.usr.cityResult
  const pathDays = location.pathname.split('/').at(-1).toString()

  const [days, setDays] = useState(parseInt(pathDays))
  const [forecast, setForecast] = useState([])
  const today = Date.now()
  const todayFormat = new Date(today)
  const latFormated = String(lat).substr(0, 7)
  const lonFormated = String(lon).substr(0, 7)

  useEffect(() => {
    console.log(days)

    const getForecast = async () => {
      try {
        const dataForecast = await fetch(
          `https://api.tomorrow.io/v4/weather/forecast?location=${latFormated},${lonFormated}&apikey=${
            import.meta.env.VITE_KEY_API_FORECAST
          }`
        )
        const dataForJson = await dataForecast.json()
        return dataForJson.timelines.daily.slice(0, days)
      } catch (error) {
        console.log(error)
      }
    }
    const setNewForecast = async () => {
      const forecastNew = await getForecast()
      setForecast(forecastNew)
      console.log(forecast)
    }
    setNewForecast()
  }, [])

  return (
    <>
      <SectionContainer
        idName='section-forecast-weather'
        className={'flex-container'}
      >
        {forecast.map((el, i) => {
          // Add curly braces for the map callback
          console.log('Element at index', i, ':', el) // Your console.log here

          return (
            // Don't forget to return the JSX!
            <InfoResult
              key={i}
              numberDiv={5}
              arrayParrafs={[
                `Temperature:${Math.round(el.values.temperatureApparentAvg)}°`,
                `Rain probability:${String(
                  el.values.precipitationProbabilityAvg * 10
                ).substr(0, 2)}%`,
                `Humidity: ${String(el.values.humidityAvg).substr(0, 2)}%`,
                `Predicted Wind: ${el.values.windSpeedAvg}kmh`
              ]}
              idName={`forecast-day-${i}`}
              title={
                i === 0 // Use strict equality ===
                  ? 'Tomorrow'
                  : new Date(
                      new Date(todayFormat).setDate(todayFormat.getDate() + i)
                    ).toDateString()
              }
            />
          )
        })}
      </SectionContainer>
    </>
  )
}

export default Forecast
