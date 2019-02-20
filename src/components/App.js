import React, { Component } from "react";
// import "../images/background.svg";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
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
                  <NavLink to="/" className="menu">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Education" className="menu">
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About" className="menu">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Projects" className="menu">
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>
          <div className="content">
            <Route exact path="/" component={Main} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Education" component={Education} />
          </div>
        </section>
      </HashRouter>
    );
  }
}
export default App;
