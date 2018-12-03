import React, { Component } from 'react';
import './App.css';

class CoolButton extends Component {
    render() {
      return (
  
    <div class="field">
        <button>{this.props.buttonName}</button>
    </div>
  
      )
    }
  }








export default CoolButton;