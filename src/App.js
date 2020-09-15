import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReactGA from "react-ga";
import portfolioCard from './img/PortfolioCard.png';


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  initializeAnalytics = (tracker) => {

    ReactGA.initialize(tracker); 
    ReactGA.pageview(window.location.pathname +  window.location.search); 
  }

  componentDidMount(){
      this.initializeAnalytics(process.env.REACT_APP_GKEY);

  }
  render() {
    return (
        <div className="App">
          <Router>
          <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" render={routerProps => <Contact {...routerProps}  {...this.state} /> } />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
          </Router> 
        
        </div>
      );
    }
}

export default App;
