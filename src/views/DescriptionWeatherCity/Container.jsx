import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FullCard } from './components/FullCard';
import { useGetAntaliaWeather, useGetBeverlyWeather, useGetMoskowWeather, useGetLondonWeather } from "../Main";

export function Container() {
    const { id: idParams } = useParams();
    const id = Number(idParams);
    let data = null;
    //id => moscow/london
    const { data: mosckowData, isLoading: isLoadingM } = useGetMoskowWeather(id);
    const { data: londonData, isLoading: isLoadingL } = useGetLondonWeather(id);
    const { data: beverlyData, isLoading: isLoadingB } = useGetBeverlyWeather(id);
    const { data: antaliaData, isLoading: isLoadingA } = useGetAntaliaWeather(id);

    //const data = mosckowData || londonData...

    const isLoading = isLoadingM || isLoadingL || isLoadingB || isLoadingA;
    if  ( id === 507338 ) {
        data = mosckowData
    } else if (id === 2643743) 
        {
            data = londonData
        }
//
   
    if (isLoading) {
        return <>Loading</>
    }

    return (<FullCard data={data} />)
}