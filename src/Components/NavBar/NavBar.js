import React, {useState} from 'react'
import '../NavBar/NavBar.scss'
import { NavLink } from 'react-router-dom'

function NavBar() {

  const [isScrolled, setScrolled] = useState(false)

  const scrolled = () => {
    console.log(window.scrollY)
    if (window.scrollY > 30) {
        setScrolled(true)
    }
    else {
        setScrolled(false)
    }
}
window.addEventListener('scroll', scrolled)

  return (
    <div className={isScrolled ? "Nav active" : "Nav"} >
            <div className="navName">Rohan</div>
            <div className="list">
                <div className="item"> <NavLink to='/'  >Home</NavLink></div>
                <div className="item"> <NavLink to='/weather' >Weather</NavLink> </div>
            </div>
        </div>
  )
}

export default NavBar