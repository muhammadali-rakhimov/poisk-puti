import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Benefits from "./components/Benefits/Benefits";
import Cities from "./components/Cities/Cities";
import Footer from "./components/Footer/Footer";
import Province from "./components/Province/Province";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Benefits />
        <Cities />
        <Province />
        {/* <br /> */}
        <Footer />
        <Switch>
          <Route path="/routes"></Route>
          <Route path="/travelers"></Route>
          <Route path="/tours"></Route>
          <Route path="/lessons"></Route>
          <Route path="/lodging"></Route>
          <Route path="/guide"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
