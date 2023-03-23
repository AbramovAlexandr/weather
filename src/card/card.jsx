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
        <h1>{`${props.temp.temp}°`}</h1>
        <h2>{`min temp:${props.temp.temp_min} max temp:${props.temp.temp_max}`}</h2>
        {weather.Cloud ? <img src={cloud}/> : weather.Clear ? <img src={sunny}/> : weather.Rain ? <img src={rain}/> : <h1>-----</h1>}
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
