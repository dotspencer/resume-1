import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <>
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
          <h1>This is HOME.</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <section className="overview center">
          <div className="topics">
            <h2>HOME</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
          <div className="topics">
            <h2>HOME</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
          <div className="topics">
            <h2>HOME</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
          <div className="topics">
            <h2>HOME</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </div>
        </section>
      </>
    );
  }
}

export default Main;
