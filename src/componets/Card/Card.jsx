import React, { useContext } from "react";
import s from "./card.module.scss";
import { getKindDegrees, getKindTemp, getUriImg } from "../../utils/helpers/CardUtils";
import PropTypes from "prop-types";
import {Context} from '../../utils/context/context';
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CardWeather = (props) => {
  const { name, temp, country, description, kindWeather, id } = props;

  const {typeTemp} = useContext(Context);

  const uriKindWeather = getUriImg(kindWeather);
  const kindTemp = getKindTemp(typeTemp, temp.temp);
  const kindDegrees = getKindDegrees(temp.temp);
  //TODO константы стровковые и числовые стоит выносить в отдельные переменные
  return (
    <div className={s.card}>
      <Typography variant="h6">{`id: ${id}`}</Typography>
      <Typography variant="h4">{`${name} (${country})`}</Typography>
      <Typography variant="h2">{`${kindDegrees}${kindTemp}°`}</Typography>
      <img alt="#" src={uriKindWeather} />
      <Typography variant="h5">{`${description}`}</Typography>
      <Link to={`${id}`}><Button>More</Button></Link>
    </div>
  )
};

CardWeather.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.any,
  description: PropTypes.any,
  country: PropTypes.any,
  clouds: PropTypes.any,
  id: PropTypes.number
};







// const {handleChangeTypeTemp, typeTemp} = useContext(Context);
//   const isK = typeTemp === 'kel';
//   const styleK = isK ? { color: 'red'} : {};

//   const isC = typeTemp === 'cel'
//   const styleC = isC ? { color: 'blue'} : {};

