import React from 'react'
import './card.css'
import rain from '../images/heavy-rain.png'
import cloud from '../images/cloud.png'
import sunny from '../images/sun.png'
import PropTypes from 'prop-types';

export const Card = (props) => {
  const {main, name, temp, country, description} = props;
    const weather = {
        Cloud: main === 'Clouds',
        Clear: main === 'Clear',
        Rain: main === 'Rain',
    }
    console.log(props)
  return (
    <div className='card'>
        <h1>{`${name} (${country})`}</h1>
        {/* <h1>{`${Math.round(props.temp.temp - 273) }°`}</h1> */}
        <h1>
          {temp.temp}
          {/* +{props.celsius 
          ? Math.round(temp.temp - 273) 
          : props.fahrenheit 
          ? Math.round((temp.temp - 273) * 1.8) 
          : props.kelvin 
          ? Math.round(temp.temp) 
          : Math.round(temp.temp - 273) }° */}
        </h1>
        <span className='min-max'>

        {/* <h2>
          min temp: +
          {props.celsius 
          ? Math.round(temp.temp_min - 273) 
          : props.fahrenheit 
          ? Math.round((temp.temp_min - 273) * 1.8) 
          : props.kelvin 
          ? Math.round(temp.temp) 
          : Math.round(temp.temp_min - 273) }°
        </h2>

        <h2>
          max temp: 
          +{props.celsius 
          ? Math.round(temp.temp_max - 273) 
          : props.fahrenheit 
          ? Math.round((temp.temp_max - 273) * 1.8) 
          : props.kelvin 
          ? Math.round(temp.temp) 
          : Math.round(temp.temp_max - 273) }°
        </h2> */}

        </span>

        

        {/* {weather.Cloud 
        ? <img alt='#' src={cloud}/> 
        : weather.Clear 
        ? <img alt='#' src={sunny}/> 
        : weather.Rain 
        ? <img alt='#' src={rain}/> 
        : <h1>-----</h1>} */}
        <h2>{`${description}`}</h2>
       
        
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  main: PropTypes.any,
  temp: PropTypes.any,
  description: PropTypes.any,
  country: PropTypes.any
};