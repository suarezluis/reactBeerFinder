import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Finder from "./components/Finder";
import Definitions from "./components/Definitions";
import About from "./components/About";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Logo />
          <Navbar />
          <Route exact path="/reactBeerFinder/" component={Home} />
          <Route path="/reactBeerFinder/finder" component={Finder} />
          <Route path="/reactBeerFinder/Definitions" component={Definitions} />
          <Route path="/reactBeerFinder/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
