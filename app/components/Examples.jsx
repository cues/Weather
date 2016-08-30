var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return(
      <div >
        <h1 className="text-center page-title font">EXAMPLES</h1>
        <div><p>Here are a few exmaples</p></div>
        <ol >
          <li>
            <Link to="/?Location=Verem,Goa">Verem, Goa</Link>
          </li>
          <li>
            <Link to="/?Location=London,UK">London, UK</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
