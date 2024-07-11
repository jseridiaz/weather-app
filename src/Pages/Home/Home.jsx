import React from 'react'
import './Home.css'
import SectionContainer from '../../Components/section/SectionContainer'
import ArticleModule from '../../Components/ArticleModule/ArticleModule'
import Img from '../../Components/Img/Img'
const Home = () => {
  return (
    <>
      <SectionContainer className='flex-container' idName='section-container'>
        <ArticleModule
          className='flex-container-column article-home'
          idContainer='first-info-home'
          textH2='Know the weather in any City that you choose'
          textP='Check out the Weather in any place of the world and more weather details, as for example: Wind ... '
          buttonExist={true}
          textBtn={'Cities'}
          anchor={true}
        />
        <ArticleModule
          className='flex-container-column article-home'
          idContainer='second-info-home'
          textH2='About us'
          textP='This section gives all Information about the first steps of Weather App and watch are the reasons to create this frei App'
          buttonExist={true}
          textBtn={'About us'}
          anchor={true}
        />
        <Img
          src='https://res.cloudinary.com/ddybbosdk/image/upload/v1720436431/weather_ah6cuj.webp'
          alt='picture with all weather conditions'
          className='flex-container place-it'
        />
      </SectionContainer>
    </>
  )
}

export default Home
