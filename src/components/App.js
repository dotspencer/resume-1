import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import "../styles/App.scss";
import "../styles/Menu.scss";
import "../styles/About.scss";

class App extends Component {
  render() {
    const mq = window.matchMedia("(max-width: 800px)");
    let menuList = document.getElementsByClassName("menuList");
    let wrapper = document.getElementsByClassName("wrapper");
    let menuItems = document.getElementsByClassName("menuItems");
    let mobileBar = document.getElementsByClassName("mobileBar");
    let logo = document.getElementsByClassName("logo");

    function openOverlay() {
      menuList[0].classList.add("overlay");
      wrapper[0].style.opacity = "1";
      mobileBar[0].classList.add("invert");
      logo[0].style.color = "white";
    }
    function closeOverlay() {
      menuList[0].classList.remove("overlay");
      wrapper[0].style.opacity = "0";
      mobileBar[0].classList.remove("invert");
      logo[0].style.color = "black";
    }
    function toggleOverlay() {
      if (mq.matches) {
        if (!menuList[0].classList.contains("overlay")) {
          console.log("opened overlay");
          openOverlay();
        } else {
          console.log("closed overlay");
          closeOverlay();
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }

    return (
      <HashRouter>
        <section>
          <header className="header box-shadow">
            <div className="wrapper cover" onClick={closeOverlay} />
            <div className="item logo">
              <div className="fullName">Trevor J. Smith</div>
              <div className="shortName">TJS</div>
            </div>
            <div className="item menu">
              <div className="mobileBar">
                <img
                  src="images/menu-icon.svg"
                  alt="profile picture"
                  onClick={toggleOverlay}
                />
              </div>
              <nav className="menu">
                <ul className="menuList">
                  <li className="menuItems" onClick={toggleOverlay}>
                    <NavLink to="/About" className="menu">
                      About
                    </NavLink>
                  </li>
                  <li className="menuItems" onClick={toggleOverlay}>
                    <NavLink to="/Projects" className="menu">
                      Projects
                    </NavLink>
                  </li>
                  <li className="menuItems" onClick={toggleOverlay}>
                    <NavLink to="/" className="menu">
                      Home
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
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
