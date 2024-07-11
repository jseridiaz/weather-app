import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Forecast from './Pages/Forecast/Forecast.jsx'
import Home from './Pages/Home/Home.jsx'
import SelectWeather from './Pages/Cities/Cities.jsx'
import AboutUs from './Pages/aboutUs/AboutUs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' index element={<Home />} />
        <Route path='/cities' element={<SelectWeather />} />
        <Route path='/forecast/:city/:days' element={<Forecast />} />
        <Route path='/about' element={<AboutUs />} />
      </Route>
      {/* Comments */}
    </Routes>
  </BrowserRouter>
)
