var React = require('react');


var WeatherMessage = React.createClass({


  render: function () {

    var {temp,location, humidity, description, icon, clouds} = this.props;
    var icons =  "http://openweathermap.org/img/w/" + icon + ".png";
    return(
      <div >
        <div classNam="weather font ">
          <div className="weather-location text-center">{location}</div>
          <div className="weather-icon"><img className="weather-image" src={icons}/></div>
          <div className="weather-item">
            <div className="weather-eachItem">Temperature</div>
              <div className="weather-eachItem">Description</div>
                <div className="weather-eachItem">Humidity</div>
                  <div className="weather-eachItem">Clouds</div>
          </div>
          <div className="weather-parameters">
            <div className="weather-eachParameters">{temp}</div>
              <div className="weather-eachParameters">{description}</div>
                <div className="weather-eachParameters">{humidity}%</div>
                  <div className="weather-eachParameters">{clouds}%</div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = WeatherMessage;
