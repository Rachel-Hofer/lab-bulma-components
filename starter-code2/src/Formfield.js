import React, { Component } from 'react';
import './App.css';

class Formfield extends Component {
  render() {
    return (

  <div>
      <div class="field one">
        <label class="label">{this.props.labelName}</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>

 

  </div>

    )
  }
}

export default Formfield;