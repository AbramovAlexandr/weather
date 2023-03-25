import React, {useState} from 'react';
import './card.css';
import {getUriImg} from './utils';
import PropTypes from 'prop-types';
import { getKindTemp } from '../Header/utils';

export const Card = (props) => {
  const {
    name,
    temp,
    country,
    description,
    kindWeather
  } = props;


  const uriKindWeather = getUriImg(kindWeather);



  return (
    <div className='card'>
        <h1>{`${name} (${country})`}</h1>
        <h1>{temp.temp}</h1>
        <img src={uriKindWeather} />
        <h2>{`${description}`}</h2>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  main: PropTypes.any,
  temp: PropTypes.any,
  description: PropTypes.any,
  country: PropTypes.any,
  clouds: PropTypes.any
};