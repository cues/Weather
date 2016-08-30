var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function(){
    return{
      isLoading: false,
    }
  },


  handleSearch: function(location){

    var that = this;

    this.setState({
      isLoading:true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });

    openWeatherMap.getHumidity(location).then(function(humidity){
      that.setState({
        location: location,
        humidity: humidity,
        isLoading: false,
      });
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });

    openWeatherMap.getDescription(location).then(function(description){
      that.setState({
        location: location,
        description: description,
        isLoading: false,
      });
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });

    openWeatherMap.getClouds(location).then(function(clouds){
      that.setState({
        location: location,
        clouds: clouds,
        isLoading: false,
      });
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });

    openWeatherMap.getIcon(location).then(function(icon){
      that.setState({
        location: location,
        icon: icon,
        isLoading: false,
      });
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });
    // this.setState({
    //   location : location,
    //   temp :23,
    // });

  },


  render: function () {
    var {isLoading, temp, humidity, description, icon, clouds,  location, errorMessage} = this.state;
    // can also be written as below
    // var temp = this.state.temp;
    // var location = this.state.location;
    function renderMessage(){
        if (isLoading){
          return <h3 className="text-center">Fetching Weather...</h3>;
        }
        else if(temp && location){
          return <WeatherMessage location={location} temp={temp} humidity={humidity} description={description} icon={icon} clouds={clouds}/>;

        }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center page-title font">WEATHER</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
