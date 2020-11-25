import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {
    return (
        /*
         *The && operators only proceed if they are true
         *so that this method comes 
         *in handy working without API as a buffer from undefined errors. 
        */
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} °C</p>}
            {description && <p> {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather; 