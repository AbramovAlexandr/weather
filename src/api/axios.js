import axios from "axios";

const srcBeverly = `https://api.openweathermap.org/data/2.5/weather?lat=34.0901&lon=-118.4065&appid=3366859d2301681021b5f32a4a5dbcfb`;
const srcLondon = `https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=3366859d2301681021b5f32a4a5dbcfb`;
const srcMoscow = `https://api.openweathermap.org/data/2.5/weather?lat=55.809&lon=37.461&appid=3366859d2301681021b5f32a4a5dbcfb`;
const srcAntalya = `https://api.openweathermap.org/data/2.5/weather?lat=36.884804&lon=30.704044&appid=3366859d2301681021b5f32a4a5dbcfb`;

export const getWeatherDataBeverly = async() =>{
    const {data} = await axios.get(srcBeverly)
    return data
  }
  
export const getWeatherDataMoscow = async() => {
    const {data} = await axios.get(srcMoscow)
    return data
  }
  
export const getWeatherDataLondon = async() => {
    const {data} = await axios.get(srcLondon)
    return data
  }
  
export const getWeatherDataAntalya = async() =>{
    const {data} = await axios.get(srcAntalya)
    return data
  }