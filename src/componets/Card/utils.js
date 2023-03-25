import rain from '../../images/heavy-rain.png';
import cloud from '../../images/cloud.png';
import sunny from '../../images/sun.png';

export const getUriImg =(kindWeather) => {
    if (kindWeather === 'Clouds') {
      return cloud;
    }

    if (kindWeather === 'Clear') {
      return sunny;
    }

    return rain;
  };
