import React from 'react'
import './card.css'
import rain from '../images/heavy-rain.png'
import cloud from '../images/cloud.png'
import sunny from '../images/sun.png'

export const Card = (props) => {

    const weather = {
        Cloud: props.main === 'Clouds',
        Clear: props.main === 'Clear',
        Rain: props.main === 'Rain',
    }
    console.log(props)
  return (
    <div className='card'>
        <h1>{`${props.name} (${props.country})`}</h1>
        {/* <h1>{`${Math.round(props.temp.temp - 273) }°`}</h1> */}

        <h1>
          {props.celsius 
          ? Math.round(props.temp.temp - 273) 
          : props.fahrenheit 
          ? Math.round((props.temp.temp - 273) * 1.8) 
          : props.kelvin 
          ? props.temp.temp 
          : Math.round(props.temp.temp - 273) }
        </h1>

        <span className='min-max'>

        <h2>
          min temp: 
          {props.celsius 
          ? Math.round(props.temp.temp_min - 273) 
          : props.fahrenheit 
          ? Math.round((props.temp.temp_min - 273) * 1.8) 
          : props.kelvin 
          ? props.temp.temp 
          : Math.round(props.temp.temp_min - 273) }
        </h2>

        <h2>
          max temp: 
          {props.celsius 
          ? Math.round(props.temp.temp_max - 273) 
          : props.fahrenheit 
          ? Math.round((props.temp.temp_max - 273) * 1.8) 
          : props.kelvin 
          ? props.temp.temp 
          : Math.round(props.temp.temp_max - 273) }
        </h2>

        </span>

        

        {weather.Cloud 
        ? <img alt='#' src={cloud}/> 
        : weather.Clear 
        ? <img alt='#' src={sunny}/> 
        : weather.Rain 
        ? <img alt='#' src={rain}/> 
        : <h1>-----</h1>}
        <h2>{`${props.description}`}</h2>
        <div className='extra'>
            {/* <p>{props.description}</p>
            <p>{props.description}</p>
            <p>{props.description}</p>
            <p>{props.description}</p> */}
        </div>
        
    </div>
  )
}
