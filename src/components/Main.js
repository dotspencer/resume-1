import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <>
        <div className="profile center">
          <div className="item picture">
            <img src="images/headProfile.svg" alt="profile picture" />
          </div>
          <div className="item about box-shadow">
            Illustrator | Front-End Developer | Writer
          </div>
        </div>
        <div className="summary center">
          <h1>Hi, I'm Trevor.</h1>
          <p>
            I have a passion for invention. Discovering new solutions to
            problems; sketching original designs; drafting and printing 3d
            models; creating works of art; writing poems and stories. I've
            worked on many projects of my own, and helped others acomplish
            theirs.
          </p>
          <p>
            <span className="tab" />
            I'm currently a Junior at Weber State University studying full-time
            within the BS of Computer Science Program.
          </p>
        </div>
        <section className="overview center box-shadow">
          <div className="topics education">
            <h2>Education</h2>
            <ul>
              <li>CS 1030 : Foundations Of Computing</li>
              <li>CS 1400 : Fundamentals Of Programming</li>
              <li>CSCI 111 : Software Development</li>
              <li>CS 1410 : Object-Oriented Programming</li>
              <li>CS 2350 : Client Side Web Development</li>
              <li>CSCI 112 : Data Structures & Algorithms</li>
              <li>CS 2550 : Database Design & SQL</li>
            </ul>
          </div>
          <div className=" topics proficiency">
            <h2>Proficiency</h2>
            <ul>
              <li>-</li>
              <li>-</li>
              <li>C++</li>
              <li>Java</li>
              <li>HTML, CSS, Javascript, Reactjs</li>
              <li>C</li>
              <li>Oracle SQL</li>
            </ul>
          </div>
        </section>

        <h1 className="projectTitle">Projects</h1>
        <section className="projects">
          <div>
            <img
              src="https://via.placeholder.com/250"
              alt="image"
              className="right top"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/200"
              alt="image"
              className="left top"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="image"
              className="right bottom"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/250"
              alt="image"
              className="left bottom"
            />
          </div>
        </section>
      </>
    );
  }
}

export default Main;
