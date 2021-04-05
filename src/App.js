import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem beatae blanditiis necessitatibus. Voluptates sed,
          quibusdam nemo sequi commodi dicta. Soluta nam ut itaque velit
          dignissimos, sint aut cumque dolores voluptatum. Inventore,
          accusantium placeat atque adipisci vel perspiciatis rerum eos minima
          pariatur tempora esse aut nemo quam voluptatibus debitis suscipit,
          asperiores animi? Iure voluptatum iusto debitis eius. Optio eligendi
          temporibus at? Tempora explicabo quaerat inventore consequuntur
          temporibus. Tempora, culpa cum officiis reprehenderit pariatur
          delectus assumenda voluptate soluta saepe nam blanditiis, sapiente
          porro nihil maiores esse voluptatem commodi. Iure alias obcaecati
          repellat. Dolor ab, tempore dolor quis totam! Unde asperiores dolores
          inventore!
        </p>
        <br />
        <br />
        <br />

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
