var React = require('react');


// var WeatherMessage = React.createClass({
//
//   render: function () {
//     var {temp,location} = this.props;
//     return(
//       <div>
//         <h2>it is {temp} degrees  in {location}</h2>
//       </div>
//     );
//   }
// })

var WeatherMessage = (temp,location) => {

  return(
    <div>
      <h2>it is {temp} degrees  in {location}</h2>
      <div>Why is the temperature like this?</div>
    </div>
  );
}
module.exports = WeatherMessage;
