import { useQuery } from "react-query";
import  { getWeatherDataBeverly } from '../../../../api/axios';

export const useGetBeverlyWeather = (id) => {
    const { data, isLoading } = useQuery(
        ['getBeverlyWeather'],
        () => getWeatherDataBeverly(),
        {
            enabled: Number(id) === 5328041,  
            onSuccess: (res) => {
            }
        }
    );

    return {
        data,
        isLoading  
    }
}