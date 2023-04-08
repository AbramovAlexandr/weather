import { useQuery } from "react-query";
import  { getWeatherDataMoscow } from '../../../../api/axios';

const  MOSCOW_ID = 507338
export const useGetMoskowWeather = (id) => {
    console.log(id)
    const { data, isLoading } = useQuery(
        ['getMosckowWeather'],
        () => getWeatherDataMoscow(),
        {
            enabled: Number(id) === MOSCOW_ID,
            onSuccess: (res) => {
                console.log(res)
            },
            
        }
    );

    return {
        data,
        isLoading  
    }
}