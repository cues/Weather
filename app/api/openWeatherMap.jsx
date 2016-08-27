var axios = require('axios');

// the open weather map api needs to be entered here along with you api key
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=5044a064047b2e4eda625e7fac363785';

// 5044a064047b2e4eda625e7fac363785

module.exports={
  getTemp:function(location){
    var encodedLocation = encodeURIComponent (location);/*this is going to properlly encode it to the browser*/
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`/*every is executed as a regular jav script expression*/

    return axios.get(requestUrl).then(function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }  else {
        return res.data.main.temp;
      }
    },function (res){
      throw new Error(res.data.message);
    });
  }
}
