import PropTypes from "prop-types";
import React from 'react'
import s from './FullCard.module.scss'
import { getUriImg } from "../../../../utils/helpers/CardUtils";

export const FullCard = (props) => {

  const {data} = props

  const weatherImg = getUriImg(data.weather[0].main)

  return (
    <div className={s.FullCard}>
        <div className={s.paper}>
            <h1>{`The weather in ${data.name}`}</h1>
            <img src={weatherImg} />
        </div>
    </div>
  )
}

FullCard.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.any,
  description: PropTypes.any,
  country: PropTypes.any,
  clouds: PropTypes.any,
  id: PropTypes.number
};
//propstypes