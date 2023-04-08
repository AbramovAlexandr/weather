import { useQuery } from "react-query";
import { getWeatherDataLondon } from "../../../../api/axios";

export const useGetLondonWeather = (id) =>{
    const {data, isLoading} = useQuery(
        ['getLondonWeather'],
        () => getWeatherDataLondon(),
        {
            enabled: Number(id) === 2643743,
        }
        )

        return{
            data,
            isLoading
        }
}