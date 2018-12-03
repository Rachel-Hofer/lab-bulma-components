import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
    render() {
      return (

<nav class="navbar">
    <div class="allOfHeaderText">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />

            <div class="navbar-start">
                <a class="navbar-item" href="https://bulma.io/">Home</a>
                    <div class="buttonsDiv">
                        <button class="btn buttonOne">Login</button>
                        <button class="btn buttonTwo">Sign-Up</button>
                    </div>
            </div>
    </div>
</nav>

)
}
}

export default Navbar; 
