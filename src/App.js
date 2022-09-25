import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Superhero from "./components/Superhero/Superhero";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/superhero/:id" component={Superhero} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
