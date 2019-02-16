import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <section className="header">
        <div className="item logo" />
        <div className="item menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Resume</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
