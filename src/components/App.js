import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <section>
        <div className="item logo" />
        <div className="item profile" />
        <div className="item menu" />
      </section>
    );
  }
}

export default App;
