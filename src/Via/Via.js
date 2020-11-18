import React, { Component } from 'react';
import { render } from 'react-dom';

class Via extends Component{
    constructor(props) {
        super(props);
        this.state = {value: 'Select'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {    this.setState({value: event.target.value});  }
      handleSubmit(event) {
        alert('Votre choix est : ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="select">Select</option>
                            <option value="via">Via</option>
                            <option value="avoid">Avoid</option>
                        </select>
                    </label>
                    <label>
                        <input type="text" name="Enter station..." />
                    </label>
                </form>

            </div>
          
        );
      }
    
}

export default Via;