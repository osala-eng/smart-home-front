import ReactWeather from 'react-open-weather'
//Optional include of the default css styles
//import 'react-open-weather/lib/css/ReactWeather.css';


const Weather = () => {
  return (
      <>
        <h2>Weather</h2>
        <ReactWeather
        forecast="today"
        apikey="8b3c19fdce976c39ae8dca50bc0e3cad"
        type="auto"
        //lat="-4.032548"
        //lon="39.683935"
        />
      </>
    
  )
}

export default Weather
