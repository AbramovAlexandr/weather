import { useQuery } from "react-query";
import { getWeatherDataAntalya } from "../../../../api/axios";

export const useGetAntaliaWeather = (id) =>{
    const {data, isLoading} = useQuery(
        ['getAntaliaWeather'],
        () => getWeatherDataAntalya(),
        {
            enabled: id === 323777,
            onSuccess: (res) =>{
            }
        }
        )

        return{
            data,
            isLoading
        }
}