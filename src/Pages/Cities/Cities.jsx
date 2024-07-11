import { useEffect, useState } from 'react'
import H2 from '../../Components/H2/H2'
import LabelInput from '../../Components/LabelInput/LabelInput'
import SectionContainer from '../../Components/section/SectionContainer'
import './Cities.css'
import Img from '../../Components/Img/Img'
import InfoResult from '../../Components/InfoResult/InfoResult'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'

const SelectWeather = () => {
  const [search, setSearch] = useState('')
  const [imgResult, setImgResult] = useState('')
  const [cityResult, setCityResult] = useState({})
  const [weather, setWeather] = useState({})

  const navigate = useNavigate()

  const formFunction = (e) => {
    e.preventDefault()
    const [input] = e.target
    navigate(`/forecast/${search}/${input.value}`, { state: { cityResult } })
  }

  useEffect(() => {
    const resData = async () => {
      if (search != '') {
        try {
          const fetchResultData = await fetch(
            `https://api.geoapify.com/v1/geocode/search?text=${search}&lang=en&limit=1&type=city&apiKey=${
              import.meta.env.VITE_KEY_API_WEATHER
            }`
          )
            .then((res) => res.json())
            .then((res) => {
              setCityResult(res.features[0].properties)
              return res
            })
          await fetch(
            `https://api.unsplash.com/photos/random/?query=${search}&client_id=${
              import.meta.env.VITE_KEY_UNSPLASH
            }`
          )
            .then((res) => res.json())
            .then(async (res) => setImgResult(res.urls.regular))
        } catch (error) {
          throw new Error(error)
        }
      }
    }
    resData()
  }, [search])

  useEffect(() => {
    if (search != '') {
      const weatherResult = fetch(
        `http://api.weatherapi.com/v1/current.json?q=${cityResult.lat},${
          cityResult.lon
        }&key=${import.meta.VITE_KEY_API_WEATHER_TWO}`
      )
        .then((res) => res.json())
        .then((res) => setWeather(res))
    }
  }, [cityResult])

  return (
    <>
      <SectionContainer
        className={'flex-container-column'}
        idName='section-form-city'
      >
        <H2 text='Search by city' />
        <form
          id='form-weather-forecast'
          onSubmit={(e) => {
            e.preventDefault()
            const [input] = e.target
            setSearch(input.value)
          }}
        >
          <LabelInput inputId='city-name' inputName='Choose the city' />
          <Button textBtn='Search' typeButton='submit' />
        </form>
      </SectionContainer>

      <SectionContainer
        className='flex-container'
        idName='section-result-weather'
      >
        {imgResult ? <Img src={imgResult} alt={`picture-${search}`} /> : ''}
        <H2
          text='<---  Search a City and know its Weather '
          className={!search ? 'showed' : 'none'}
        />
        <InfoResult
          numberDiv={2}
          arrayParrafs={[
            `City: ${cityResult.city} `,
            `Country: ${cityResult.country} `
          ]}
          idName='container-data-city'
          className={!search ? 'none' : ''}
        />

        <InfoResult
          className={`flex-container-column ${!search ? 'none' : ''}`}
          numberDiv={3}
          arrayParrafs={[
            weather.current?.temp_c + '°',
            'Feels like:  ' + weather.current?.feelslike_c + '°',
            'Lowest C°: ' + weather.current?.dewpoint_c + '°'
          ]}
          idName='container-Temperatur-city'
          title='Temperatur'
        />
        <InfoResult
          className={`flex-container-column ${!search ? 'none' : ''}`}
          numberDiv={3}
          arrayParrafs={[
            `Currently: ${weather.current?.condition.text}`,
            `Humidity:  ${weather.current?.humidity}%`,
            `Wind:  ${weather.current?.wind_kph} kmh`
          ]}
          idName='container-conditions-city'
          title=' Weather Conditions'
        >
          <Img
            src={`https:${weather.current?.condition.icon}`}
            alt={`icon-${weather.current?.condition.text}`}
          />
        </InfoResult>
        <form
          id='form-forecast-weather'
          onSubmit={formFunction}
          className={[!search ? 'none' : '', 'flex-container-column'].join(' ')}
        >
          <LabelInput
            inputId='days-forecast'
            inputName='Forecast Weather for:'
            inputType='number'
            maxNumber={7}
            minNumber={0}
            needed={true}
          />
          <Button
            textBtn={'Check out the forecast Weather'}
            typeButton='submit'
          />
        </form>
      </SectionContainer>
    </>
  )
}

export default SelectWeather
