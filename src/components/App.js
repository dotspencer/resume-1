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
    let menuList = document.getElementsByClassName("menuList");
    let wrapper = document.getElementsByClassName("wrapper");
    let header = document.getElementsByClassName("header");
    let menuItems = document.getElementsByClassName("menuItems");
    let content = document.getElementsByClassName("content");

    function openOverlay() {
      console.log("opened overlay");
      menuList[0].classList.add("overlay");
      header[0].classList.add("darken");
      wrapper[0].classList.add("cover");
      content[0].classList.add("noscroll");
    }
    function closeOverlay() {
      console.log("closed overlay");
      menuList[0].classList.remove("overlay");
      header[0].classList.remove("darken");
      wrapper[0].classList.remove("cover");
      content[0].classList.remove("noscroll");
    }
    function toggleOverlay() {
      if (!menuList[0].classList.contains("overlay")) {
        openOverlay();
      } else {
        window.scrollTo(0, 0);
        closeOverlay();
      }
    }

    return (
      <HashRouter>
        <section className="">
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
                  onClick={toggleOverlay}
                />
              </div>
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
            </div>
          </section>
          <div className="wrapper" onClick={toggleOverlay} />
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
