import { useState } from 'react'
import Home from "./components/Home"
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
    <div className="nav-container">
            <div className="logo-container">
                <a href="#"><img src="./img/logo.svg" alt="Logo" /></a>
            </div>
            <div className="nav-menu">
                <ul>
                    <li><Link to='#about' smooth>ABOUT</Link></li>
                    <li><Link to='#work' smooth>WORK</Link></li>
                </ul>
            </div>
            <div className="nav-contact">
                <div className="nav-contact-container">
                <button><Link to='#contact' smooth>CONTACT</Link></button>
                </div>
            </div>
        </div>
    <Home />
    <About />
    <Work />
    <Contact />
    </>
    </BrowserRouter>
  )
}

export default App
