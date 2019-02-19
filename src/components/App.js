import React, { Component } from "react";
// import "../images/background.svg";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Main from "./Main";
import Overview from "./overview";
import Projects from "./projects";
import Education from "./education";
import "../styles/App.css";
class App extends Component {
  render() {
    return (
      <HashRouter>
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
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/About">About</NavLink>
                </li>
                <li>
                  <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/Education">Education</NavLink>
                </li>
                <li>
                  <NavLink to="/Resume">Resume</NavLink>
                </li>
              </ul>
            </div>
          </section>
          <div className="content">
            <Route path="/" component={Main} />
            <Route path="/Overview" component={Overview} />
          </div>
        </section>
      </HashRouter>
    );
  }
}
export default App;
