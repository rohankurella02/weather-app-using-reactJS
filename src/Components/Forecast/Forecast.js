import React from 'react'
import '../Forecast/Forecast.scss'
import { iconUrlFromCode } from '../../weatherService'
import cloud from '../../Assets/cloud.svg'
import sunnyMist from '../../Assets/sunnyMist.svg'
import thunder from '../../Assets/thunder.svg'
import cloudy from '../../Assets/cloudy.svg'
import rain from '../../Assets/rain.svg'
import clear from '../../Assets/clear.svg'

function Forecast({ title, payload }) {
    console.log(payload)
    const icon = {
        "11d": thunder,
        "11n": thunder,
        "03d": cloudy,
        "03n": cloudy,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "50d": sunnyMist,
        "50n": sunnyMist,
        "01d": clear,
        "01n": clear,
        "02d": cloudy,
        "02n": cloudy,
        "04d": cloudy,
        "04n": cloudy,
    }
    return (
        <div className='forecast'>
            <div className="heading2"><p>{title}</p></div>
            <hr />
            <div className="hourly">
                {
                    payload.map((payload) => {
                        return <div className="hourlyItem">
                            <div className="hourlyTime">
                                <p>{payload.title}</p>
                            </div>
                            <div className="hourlyIcon">
                                <img style={{width: "65px"}} src={icon[payload.icon]} alt="cloud" />
                            </div>
                            <div className="hourlyTemp">
                                <p style={{ fontWeight: "700" }}>{Math.floor(payload.temp)}°</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Forecast