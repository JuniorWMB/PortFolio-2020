import "./App.css";
// import Header from "./Components/Header";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";

// import de mes dependences
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
