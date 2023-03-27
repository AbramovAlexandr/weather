import React, { useState } from "react";
import "./card.css";
import { getKindDegrees, getKindTemp, getUriImg } from "../../Utils/CardUtils";
import PropTypes from "prop-types";
//use modules.css && js/ts in css
// const TEMP_TYPE_KEL = 'kel';

export const Card = (props) => {
  const { name, temp, country, description, kindWeather } = props;

  const [isKindTemp, setIsKindTemp] = useState("cel");

  const uriKindWeather = getUriImg(kindWeather);
  const kindTemp = getKindTemp(isKindTemp, temp.temp);
  const kindDegrees = getKindDegrees(temp.temp);
  //TODO константы стровковые и числовые стоит выносить в отдельные переменные
  return (
    <div className="card">
      <h1>{`${name} (${country})`}</h1>
      <h1>{`${kindDegrees}${kindTemp}°`}</h1>
      <img alt="#" src={uriKindWeather} />
      <h2>{`${description}`}</h2>
      <span className="temp">
        <button onClick={() => setIsKindTemp("kel")}>k</button>
        <button onClick={() => setIsKindTemp("fah")}>f</button>
        <button onClick={() => setIsKindTemp("cel")}>c</button>
      </span>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.any,
  description: PropTypes.any,
  country: PropTypes.any,
  clouds: PropTypes.any,
};
