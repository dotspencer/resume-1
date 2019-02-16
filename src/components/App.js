import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <section>
        <section className="header">
          <div className="item logo">
            <img
              src="https://via.placeholder.com/50x50.png"
              alt="profile picture"
            />
          </div>
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
        <section className="profile">
          <div className="item picture">
            <img
              src="https://via.placeholder.com/150x150.png"
              alt="profile picture"
            />
          </div>
          <div className="item about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </section>
        <section className="overview">
          <div className="item ovr" />
          <div className="item a" />
          <div className="item b" />
          <div className="item c" />
          <div className="item d" />
        </section>
      </section>
    );
  }
}

export default App;
