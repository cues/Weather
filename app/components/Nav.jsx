var React = require('react');
var {Link, IndexLink} = require('react-router'); /*how the routes are defined, using inde link show the main link selected only when it is required*/

var Nav = React.createClass({

  onSearch: function(e){
    e.preventDefault();
    alert('not yet done');
  },

  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text cursor-default">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold',color:'red'}}>Examples</Link>
            </li>
         </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by city name" className="nav-search"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
        </div>
      </div>

    );
  }
});

module.exports = Nav;
