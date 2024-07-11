import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  let [mainId, setMainId] = useState('home-main')
  const location = useLocation()

  useEffect(() => {
    mainId = setMainId(
      `${location.pathname.slice(1).replaceAll('/', '-')}-main`
    )
  }, [location])

  return (
    <>
      <header className='flex-container'>
        <h1>
          <Link to='/'>Weather on the World</Link>
        </h1>
        <nav>
          <ul className='flex-container'>
            <li>
              <NavLink to='/cities'>Search by cities</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className='flex-container' id={mainId}>
        <Outlet />
      </main>
      <footer className='flex-container'>
        <div id='container-contact-email'>
          <ul className='flex-container'>
            <li>
              <p>
                Contact to me:
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jseridiaz@gmail.com'
                  target='_blank'
                >
                  <img
                    src='https://res.cloudinary.com/ddybbosdk/image/upload/v1720530680/iconos%20rrss/gmail-old-svgrepo-com_i6lfxe.svg'
                    alt='icon-gmail'
                  />
                  jseridiaz@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>Created by José Daniel Rivera Díaz ©</p>
            </li>
          </ul>
        </div>
        <div id='container-rrss'>
          <ul className='flex-container'>
            <li>
              <a
                href='https://www.codewars.com/users/jseridiaz'
                target='_blank'
              >
                <img
                  src='https://res.cloudinary.com/ddybbosdk/image/upload/v1712656077/imgCodewars_rbtotr.webp'
                  alt='codewar-rrss-icon'
                  loading='lazy'
                />
                <p>CodeWars</p>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/josedanielriveradiaz/'
                target='_blank'
              >
                <img
                  src='https://res.cloudinary.com/ddybbosdk/image/upload/v1720530926/iconos%20rrss/linkedin-icon-2-logo-svgrepo-com_mfyfxh.svg'
                  alt='linkedin-rrss-icon'
                  loading='lazy'
                />
                <p>Linkedin</p>
              </a>
            </li>
            <li>
              <a
                href='https://sparkly-mochi-a11b03.netlify.app/'
                target='_blank'
              >
                <img
                  src='https://res.cloudinary.com/ddybbosdk/image/upload/v1720531110/iconos%20rrss/portfolio-svgrepo-com_za01m0.svg'
                  alt='my-portfolio-icon'
                  loading='lazy'
                />
                <p>Portfolio</p>
              </a>
            </li>
            <li>
              <a href='https://github.com/jseridiaz' target='_blank'>
                <img
                  src='https://res.cloudinary.com/ddybbosdk/image/upload/v1720531216/iconos%20rrss/github-142-svgrepo-com_rgiofi.svg'
                  alt='Github-rrss-icon'
                  loading='lazy'
                />
                <p>Github</p>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
