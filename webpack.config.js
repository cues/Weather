// this file lets you configure what webpack does
module.exports = {
  entry : './app/app.jsx',
  output : {
    path : __dirname,
    filename: './public/bundle.js'
  },
  resolve : {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',

    },
    extensions: ['', '.js', '.jsx']
  },
  // because the entry file is jsx we require a loader to get it started
  // babe-loader takes our files pass them through react, get output and run them through es2015 as well
  // preset tells babel what to do
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
                presets: ['react', 'es2015']
                },
        test : /\.jsx?$/,
        exclude : /(node_modules | bower_components)/
      }
    ]

  }
};