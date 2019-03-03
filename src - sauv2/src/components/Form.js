import React from 'react';
class Form extends React.Component{
  render() {
    return (
      <div>
        <form onSubmit = {this.props.loadWeather}>
            <input type="text" placeholder="Search for a city" name="city"/>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
export default Form;
