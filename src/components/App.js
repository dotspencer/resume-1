import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import "../styles/App.css";
import "../styles/Menu.css";
import "../styles/About.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <section>
          <section className="header">
            <div className="item logo">
              <div className="full">Trevor J. Smith</div>
              <div className="short">TJS</div>
            </div>
            <div className="item menu">
              <div className="mobileBar">
                <img
                src="images/menu-icon.svg"
                alt="profile picture"
              />
            </div>
              <ul>
                <li className="menuItems">
                  <NavLink to="/About" className="menu">
                    About
                  </NavLink>
                </li>
                <li className="menuItems">
                  <NavLink to="/Projects" className="menu">
                    Projects
                  </NavLink>
                </li>
                <li className="menuItems">
                  <NavLink to="/" className="menu">
                    Home
                  </NavLink>
                </li>
              </ul>

            </div>
          </section>
          <div className="content">
            <Route exact path="/" component={Main} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
          </div>
        </section>
      </HashRouter>
    );
  }
}
export default App;
