import React from 'react';
import classnames from 'classnames';

class Weather extends React.Component{

  render() {
    console.log("hey " + this.props.active);
    let classes = classnames('contentMeteo', {active: this.props.active});
    // var classNames = require('classnames');
    // classNames('apparition', {active: this.props.classActive});
    // let classes = classnames('apparition', {active: this.state.classActive});
    return(

         <div className={classes}>
          <button onClick={this.props.hideWeather}>Retour</button>
          {this.props.city && <p id="city">{this.props.city}</p>}
          <div>
            {this.props.description && <p id="icon">{this.props.description}</p>}
            {this.props.temperature && <p id="temp">{this.props.temperature}</p>}
          </div>
          <section id="additionnal_content">
            <div className="add_info">
              <img src="#" alt="icon humidity"/>
              {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            </div>
            <div className="add_info">
              <img src="#" alt="icon wind"/>
              {this.props.wind && <p>Wind: {this.props.wind}</p>}
            </div>
          </section>
         </div>
     )
   }
}
export default Weather;
