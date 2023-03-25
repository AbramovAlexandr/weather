import axios from 'axios';
import React from 'react';
import '../../App.css';
import { Card } from '../Card/Card';
import { Header } from '../Header/Header';

const srcBeverly = `https://api.openweathermap.org/data/2.5/weather?lat=34.0901&lon=-118.4065&appid=3366859d2301681021b5f32a4a5dbcfb`
const srcLondon = `https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=3366859d2301681021b5f32a4a5dbcfb`
const srcMoscow = `https://api.openweathermap.org/data/2.5/weather?lat=55.644466&lon=37.395744&appid=3366859d2301681021b5f32a4a5dbcfb`
const srcAntalya = `https://api.openweathermap.org/data/2.5/weather?lat=36.884804&lon=30.704044&appid=3366859d2301681021b5f32a4a5dbcfb`

function Main() {
  //* ApiWeather */
  const [beverly, setBeverly] = React.useState([])
  const [london, setLondon] = React.useState([])
  const [moscow, setMoscow] = React.useState([])
  const [antalya, setAntalya] = React.useState([])

  const [loading, setLoading] = React.useState(true)

  

  React.useEffect(() =>{
    axios
        .get(srcBeverly)
        .then((res) => {
          setBeverly(res.data)
        })
  }, [])

  React.useEffect(() =>{
    axios
        .get(srcMoscow)
        .then(res => {
          setMoscow(res.data)
        })
  }, [])

  React.useEffect(() =>{
    axios
        .get(srcLondon)
        .then((res) => {
          setLondon(res.data)
        })
  }, [])

  React.useEffect(() =>{
    axios
        .get(srcAntalya)
        .then((res) => {
          setAntalya(res.data)
          setTimeout(() => {
            setLoading(false)
          }, 2000);
        })
  }, [])

//   console.log(beverly)
//   console.log(london)
//   console.log(moscow)
//   console.log(antalya)

  
  if(loading){
    return(
      <h1>Loading...</h1>
      
    )
  }

  const weatherData = [
    {
      data: moscow
    },
    {
      data: antalya
  
    },
    {
      data: beverly
    },
    {
      data: london
    }
  ];
  return (
    <>
    <Header />
    
    <div className="App">
      {
        weatherData.map((item, id) => {
          const weather = item.data.weather[0];
          const kindWeather = weather.main;
          const description = weather.description;
          const country = item.data.sys.country;
          const { main: temp, name }  = item.data;
          return <Card 
            description={description}
            country={country}
            temp={temp}
            name={name}
            kindWeather={kindWeather}
            key={id}
          />
        })
      }
    </div>
    </>
    
  );
}

export default Main;
