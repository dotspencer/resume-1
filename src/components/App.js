import React, { Component } from "react";
// import "../images/background.svg";
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
        <section className="profile center">
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
        <div className="summary center">
          <h1>This is a Title.</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <section className="overview center">
          <div className="topics">
            <h2>Title</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
          <div className="topics">
            <h2>Title</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
          <div className="topics">
            <h2>Title</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
          <div className="topics">
            <h2>Title</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
        </section>
      </section>
    );
  }
}

export default App;
