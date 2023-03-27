import React, { useState } from 'react';
import './card.css';
import {getIsTemp, getUriImg} from '../../Utils/CardUtils';
import PropTypes from 'prop-types';

export const Card = (props) => {
  const {
    name,
    temp,
    country,
    description,
    kindWeather
  } = props;

  const [isKindTemp, setIsKindTemp] = useState('cel')

  const uriKindWeather = getUriImg(kindWeather);
  const KindTemp = getIsTemp(isKindTemp, temp.temp)
  return (
    <div className='card'>
        <h1>{`${name} (${country})`}</h1>
        <h1>{`+${KindTemp}°`}</h1>
        <img src={uriKindWeather} />
        <h2>{`${description}`}</h2>
        <span className='temp'>
          <button onClick={() => setIsKindTemp('kel')}>k</button>
          <button onClick={() => setIsKindTemp('fah')}>f</button>
          <button onClick={() => setIsKindTemp('cel')} >c</button>
        </span>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.any,
  description: PropTypes.any,
  country: PropTypes.any,
  clouds: PropTypes.any
};