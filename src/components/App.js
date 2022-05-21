import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/about" component={About}/>
      <Redirect to="/" />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
