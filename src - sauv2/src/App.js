import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
class App extends React.Component{
  constructor(props) {
		super(props);
		this.hideWeather = this.hideWeather.bind(this);
	}
  state = {
    active : false,
    temperature: undefined,
    wind: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();

    var city = e.target.elements.city.value;

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&lang=fr&units=metric&appid=5ab3db59a354fa044611674b32c93d1a');

    const response = await api_call.json();

    console.log(response);

    if(city){
      this.setState({
        temperature: response.main.temp,
        wind: response.wind.speed,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }

    this.displayWeather();

  }


  displayWeather(){
    //
    // var content = document.getElementById('contentMeteo');
    // console.log("coucou");
      this.setState({ active : true});
    // this.state.class = 'apparition';
    // console.log(this.state.class);
  }

  hideWeather(){
    this.setState({ active : false});
  }

   render(){
    return(
      <div>
        <Titles/>
        <Form loadWeather={this.getWeather}/>
        <Weather
          active = {this.state.active}
          temperature={this.state.temperature}
          wind={this.state.wind}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          hideWeather = {this.hideWeather}
         />
      </div>
   )
  }
}
export default App;
