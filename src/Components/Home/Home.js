import React from 'react'
import '../Home/Home.scss'
import weatherLogo from '../../Assets/weatherLogo.png';

function Home() {
    return (
        <div className='home' style={{display: "flex"}}>
            <div>
                <div className="heading">
                    We Know The Future !
                </div>
                <div className="content">
                    <p>Want to go outside ?</p>
                    <p>Get the latest forecast for today, tomorrow and the day after in one place</p>
                </div>
            </div>
            <img className='weatherImg' src={weatherLogo} alt="weather" />
        </div>
    ) 
}

export default Home
