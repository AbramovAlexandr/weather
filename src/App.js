import axios from 'axios';
import React from 'react';
import './App.css';
import { Card } from './card/card';

const srcBeverly = `https://api.openweathermap.org/data/2.5/weather?lat=34.0901&lon=-118.4065&appid=3366859d2301681021b5f32a4a5dbcfb`
const srcLondon = `https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=3366859d2301681021b5f32a4a5dbcfb`
const srcMoscow = `https://api.openweathermap.org/data/2.5/weather?lat=55.644466&lon=37.395744&appid=3366859d2301681021b5f32a4a5dbcfb`
const srcAntalya = `https://api.openweathermap.org/data/2.5/weather?lat=36.884804&lon=30.704044&appid=3366859d2301681021b5f32a4a5dbcfb`

function App() {
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

  console.log(beverly)
  console.log(london)
  console.log(moscow)
  console.log(antalya)

  
  if(loading){
    return(
      <h1>Loading...</h1>
      
    )
  }

  return (
    <div className="App">
      <Card main={moscow.weather[0].main} description={moscow.weather[0].description} temp={moscow.main} country={moscow.sys.country} name={moscow.name}/>
      <Card main={antalya.weather[0].main} description={antalya.weather[0].description} temp={antalya.main} country={antalya.sys.country} name={antalya.name}/>
      <Card main={beverly.weather[0].main} description={beverly.weather[0].description} temp={beverly.main} country={beverly.sys.country} name={beverly.name}/>
      <Card main={london.weather[0].main} description={london.weather[0].description} temp={london.main} country={london.sys.country} name={london.name}/>
    </div>
  );
}

export default App;
