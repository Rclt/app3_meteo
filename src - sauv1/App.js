import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    // document.getElementById("contentMeteo").innerHTML='';
    e.preventDefault();

    var city = e.target.elements.city.value;

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&lang=fr&units=metric&appid=5ab3db59a354fa044611674b32c93d1a');

    const response = await api_call.json();

    console.log(response);

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })

  }

   render(){
    return(
      <div>
        <Titles/>
        <Form loadWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
         />
      </div>
   )
  }
}
export default App;
