import "./App.css";
import React, { useEffect } from "react";
import ReactGa from "react-ga";
// import { createBrowserHistory } from "history";
// import createHistory from "history/createBrowserHistory";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Works from "./Pages/Works";

// import de mes dependences
import Contact from "./Pages/Contact";

function App() {
  // const history = createBrowserHistory();
  // history.listen((window) => {
  //   ReactGa.set({ page: window.location.pathname });
  //   ReactGa.pageview(window.location.pathname);
  // });
  // useEffect(() => {
  //   ReactGa.initialize("UA-182860174-1");
  //   history.listen((location, action) => {
  //     ReactGa.pageview(window.location.pathname + window.location.search);
  //   });
  // }, [history]);

  useEffect(() => {
    ReactGa.initialize("UA-182860174-1");
    ReactGa.set({ page: window.location.pathname });

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/about" component={About} />
                <Route exact path="/works" component={Works} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
