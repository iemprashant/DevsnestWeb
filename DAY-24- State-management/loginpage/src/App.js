import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Spinner from './Components/Spinner';
export default function App() {

  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  let routes = <Spinner />;
  if (!loading) {
    routes =
      (<Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route exact path="/Dashboard" >
          <Dashboard />
        </Route>
        <Route exact path="/" >
          <Home
            setLogin={setLogin}
            login={login}
            loading={loading}
            setLoading={setLoading} />
        </Route>
      </Switch>);
  }
  if (!loading && !login) {
    routes =
      (<Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/" >
          <Home
            setLogin={setLogin}
            login={login}
            loading={loading}
            setLoading={setLoading} />
        </Route>
      </Switch>);
  }
  return (
    <Router>
      <Navbar islogin={login} />
      {routes}
    </Router>
  );
}
