import { useLocation } from 'react-router-dom'
import './Forecast.css'
import React, { useEffect, useState } from 'react'
import InfoResult from '../../Components/InfoResult/InfoResult'
import SectionContainer from '../../Components/section/SectionContainer'

const Forecast = () => {
  const location = useLocation()

  const { city, country, lat, lon } = history.state.usr.cityResult
  const pathDays = location.pathname.split('/').at(-1).toString()

  const [days, setDays] = useState(parseInt(pathDays))
  const [forecast, setForecast] = useState([])
  const today = Date.now()
  const todayFormat = new Date(today)
  const dateformated = `${todayFormat.getDate()}/${todayFormat.getMonth() + 1}`
  const tomorrow = new Date(todayFormat).setDate(todayFormat.getDate() + 1)
  const dayI = (i) => new Date(todayFormat).setDate(todayFormat.getDate() + i)

  const [currentDay, setCurrentDay] = useState(new Date(Date.now()))

  useEffect(() => {
    const getForecast = async () => {
      try {
        const dataForecast = await fetch(
          `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${
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
    }
    setNewForecast()
  }, [])

  return (
    <>
      <SectionContainer
        idName='section-forecast-weather'
        className={'flex-container'}
      >
        {forecast.map((el, i) => (
          <InfoResult
            key={i}
            numberDiv={5}
            arrayParrafs={[
              `Temperature:${Math.round(el.values.temperatureApparentAvg)}°`,
              `Rain probability:${el.values.precipitationProbabilityAvg * 10}%`,
              `Humidity: ${el.values.humidityAvg}%`,
              `Predicted Wind: ${el.values.windSpeedAvg}kmh`
            ]}
            idName={`forecast-day-${i}`}
            title={
              i == 0
                ? 'Tomorrow'
                : new Date(
                    new Date(todayFormat).setDate(todayFormat.getDate() + i)
                  ).toDateString()
            }
          />
        ))}
      </SectionContainer>
    </>
  )
}

export default Forecast
