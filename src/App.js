import { Component } from "react";
import "./App.css";
// import Home from "./pages/landingPage/Home";
import Routing from "./routing/Routing";

class App extends Component {
  render() {
    return (
      <div className="mainContainer  font-Expletus">
        <Routing/>
      </div>
    );
  }
}

export default App;
