import { useLocation } from 'react-router-dom'
import './Forecast.css'
import React, { useEffect, useState } from 'react'
import InfoResult from '../../Components/InfoResult/InfoResult'
import SectionContainer from '../../Components/section/SectionContainer'

const Forecast = () => {
  const location = useLocation()
  console.log(history.state)
  console.log(location.pathname.split('/'))
  const { city, country, lat, lon } = history.state.usr.cityResult
  const pathDays = location.pathname.split('/').at(-1).toString()
  console.log(pathDays)
  console.log(city, country, lat, lon)
  const [days, setDays] = useState(parseInt(pathDays))
  const [forecast, setForecast] = useState([])
  const today = Date.now()
  const todayFormat = new Date(today)
  const dateformated = `${todayFormat.getDate()}/${todayFormat.getMonth() + 1}`
  const tomorrow = new Date(todayFormat).setDate(todayFormat.getDate() + 1)
  const dayI = (i) => new Date(todayFormat).setDate(todayFormat.getDate() + i)
  console.log(dateformated)
  console.log(new Date(tomorrow).toDateString())
  console.log(todayFormat.toDateString())
  // console.log(today.toDateString())
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
        console.log(dataForJson)
        return dataForJson.timelines.daily.slice(0, days)
      } catch (error) {
        console.log(error)
      }
    }
    const setNewForecast = async () => {
      const forecastNew = await getForecast()
      setForecast(forecastNew)
    }
    console.log(currentDay.toDateString())
    setNewForecast()
  }, [])

  return (
    <>
      {console.log(forecast)}
      <SectionContainer
        idName='section-forecast-weather'
        className={'flex-container'}
      >
        {console.log(forecast != [] ? forecast : 'ok')}
        {forecast &&
          forecast.map((el, i) => (
            <InfoResult
              key={i}
              numberDiv={5}
              arrayParrafs={[
                `Average Temperature:${el.values.temperatureApparentAvg}°`,
                `Clouds:${el.values.cloudCoverAvg}%`,
                `Rain probability:${el.values.precipitationProbabilityAvg}%`,
                `Average Humidity: ${el.values.humidityAvg}`,
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
