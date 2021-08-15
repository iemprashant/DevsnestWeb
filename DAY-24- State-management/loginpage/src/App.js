
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Users from './Components/Users';
import Layout from './Components/Layout';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  let routes =
    (<Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route exact path="/Dashboard" >
        <Home />
      </Route>
      <Route exact path="/" >
        <Home />
      </Route>
    </Switch>);
  return (
    <Router>
      <Layout>
        {routes}
      </Layout>
    </Router>
  );
}
