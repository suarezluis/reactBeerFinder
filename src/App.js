import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Finder from "./components/Finder";
import Education from "./components/Education";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Logo />
          <Navbar />

          <Route exact path="/reactBeerFinder/" component={Home} />
          <Route path="/reactBeerFinder/finder" component={Finder} />
          <Route path="/reactBeerFinder/education" component={Education} />
          <Route path="/reactBeerFinder/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
