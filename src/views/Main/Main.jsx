import React, { useContext, useEffect, useState  } from "react";
import s from './Main.module.scss'
import { Button, TextField } from "@mui/material";
import { Context } from "../../utils/context/context";
import { useGetAntaliaWeather, useGetLondonWeather, useGetBeverlyWeather, useGetMoskowWeather } from "./index";
import { BtnStyle } from "./componets/BtnStyled/btnStyled";
import { CardWeather } from "../../componets/card/card";

function Main() {
  const [moscow, setMoscow] = useState([]);
  const [antalia, setAntalia] = useState([]);
  const [beverly, setBeverly] = useState([]);
  const [london, setLondon] = useState([]);

  const idM = 507338
  const idA = 323777
  const idB = 5328041
  const idL = 2643743

  const [Loading, setLoading] = useState(true)
  //get request
  const { data: moscowData, isLoading: isLoadingM } = useGetMoskowWeather(idM);
  const { data: antaliaData, isLoading: isLoadingA } = useGetAntaliaWeather(idA);
  const { data: beverlyData, isLoading: isLoadingB } = useGetBeverlyWeather(idB);
  const { data: londonData, isLoading: isLoadingL } = useGetLondonWeather(idL);

  useEffect(() => {
    if( moscowData ) {
      setMoscow(moscowData);
    }
  }, [moscowData])

  useEffect(() => {
    if( antaliaData ) {
      setAntalia(antaliaData);
    }
  }, [antaliaData])

  useEffect(() => {
    if( beverlyData ) {
      setBeverly(beverlyData);
    }
  }, [beverlyData])

  useEffect(() => {
    if( londonData ) {
      setLondon(londonData);
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }, [londonData])
  
  
  const {typeTheme} = useContext(Context)

  const weatherData = [
    {
      data: moscow
    },
    {
      data: london
    },
    {
      data: antalia
    },
    {
      data: beverly
    },
  ]


  const isLoading = isLoadingM || isLoadingA || isLoadingB || isLoadingL;
  if (Loading) {
    return <>Loading</>
  }
  return (
    <div className={typeTheme ? s.wrapper : s.wrapperDark}>
      <div className={s.input}>
        <TextField id="standard-basic" label="Enter city" variant="standard" />
        <BtnStyle background={'lightblue'}>ok</BtnStyle>
      </div>
      
      <div className={s.main}>
        {weatherData.map((item, idItem) => {
          const weather = item?.data?.weather[0];
          if(!weather){
            return <div>qwe</div>
          }
          const kindWeather = weather.main;
          const description = weather.description;
          const country = item.data.sys.country;
          const { main: temp, name, id } = item.data;
        
          return (
            <CardWeather
              description={description}
              country={country}
              temp={temp}
              name={name}
              kindWeather={kindWeather}
              id={id}
              key={idItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
