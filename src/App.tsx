import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';


import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectPage from "./pages/Project";
import Header from "./components/Header";

const MainContainer = styled.div`
  margin: 32px;
`

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainContainer>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/project" component={ProjectPage} />
          </MainContainer>
        </Router>
      </div>
    );
  }
}
