import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home"
import About from "./About"
import User from "./User"
const App = () => {

  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: "/about",
                  state: {
                    from: "root",
                  }
                }
              }>About</Link>
            </li>
            <li>
              <Link to="/user/mukesh/purohit">User</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/user/:name" component={User} /> */}
              <Route exact path="/user/:firstname/:lastname" component={User} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
};

export default App;
