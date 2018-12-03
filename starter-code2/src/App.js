import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Formfield from './Formfield';
import CoolButton from './CoolButton';

class App extends Component {
  render() {
    return (

  <div>

  <div>
      <Navbar />
  </div>

  <form>
      <Formfield labelName="Name" />
      <Formfield labelName="E-mail" />
      <br></br>
      <CoolButton buttonName="Submit Success"/>
      <CoolButton buttonName="Submit Failure"/>
  
  </form>

  </div>

)
}
}

export default App; 
