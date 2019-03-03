import React from 'react';
class Form extends React.Component{
  render() {
    return (
      <div>
        <form onSubmit = {this.props.loadWeather}>
          <label>
            Name:
            <input type="text" name="city"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
export default Form;
