import React, { Component } from 'react';
import './App.css';
import LandingView from "./components/landing-view/LandingView";
import { ParallaxProvider } from 'react-scroll-parallax';

export default class App extends Component {
  render() {
    return (
        <ParallaxProvider>
      <div className="App">
        <LandingView/>
      </div>
        </ParallaxProvider>
    );
  }
}
