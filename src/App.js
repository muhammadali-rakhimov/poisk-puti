import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Benefits from "./components/Benefits/Benefits";
import Cities from "./components/Cities/Cities";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Benefits />
        <Cities />
        <br />
        <p style={{ margin: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet commodi
          consequuntur unde illo quisquam quis sit officia reprehenderit
          necessitatibus doloremque doloribus quia delectus atque mollitia
          molestias, libero hic provident sequi! Saepe fugit minima voluptatibus
          ab doloremque delectus soluta, alias veniam excepturi, facere
          asperiores placeat ratione eos similique? Beatae sequi unde neque iste
          ad corrupti, nostrum deleniti laborum, qui assumenda vitae! Nesciunt
          ex consectetur perferendis maxime, odio culpa quaerat itaque porro
          dolores ducimus in, aliquid beatae? Ex sint reiciendis inventore
          beatae minus ab veniam quaerat hic eum, blanditiis illo assumenda
          natus! Consequuntur saepe architecto, mollitia nesciunt ut quaerat
          asperiores a cumque quis veritatis quae suscipit? Architecto, quaerat
          tenetur corrupti qui temporibus quod quas tempora dolores
          necessitatibus, numquam dolorem officia, similique accusantium?
          Eligendi sapiente magnam recusandae, molestias hic animi adipisci
          deserunt illo dicta ratione, molestiae vitae possimus aut debitis non
          aliquam atque porro, architecto quasi eos. Distinctio sunt sint
          aperiam aliquam iure! Voluptas debitis adipisci doloremque maiores
          officia neque earum distinctio accusantium quod similique explicabo,
          eligendi eveniet? Rerum culpa, animi fugit harum qui labore
          perferendis et. Minima ex at eius officia ab? Deserunt dignissimos
          eligendi sequi eveniet ipsam mollitia, fugiat nihil sunt dicta rem
          repellendus atque magnam similique possimus distinctio, nesciunt
          veniam, at amet harum. Libero dolor ex iste, nisi voluptatum officia?
          Rem enim labore, repudiandae sint minima consequatur nemo impedit quis
          sunt recusandae, eaque corporis dolores veniam exercitationem dolorem
          unde doloremque nulla. Voluptatum repellat nesciunt autem voluptas
          ipsum quibusdam dolores eaque. Quos mollitia sunt accusantium, iste
          sequi necessitatibus dolore eaque optio natus iusto nesciunt cum
          voluptate ut? Fuga quidem praesentium laboriosam possimus eius eum,
          dolorum odit quaerat hic eos quo corporis? Provident enim vero
          perferendis temporibus placeat quo eius dolor consectetur tenetur
          officiis ullam ea officia, magnam eaque aspernatur ipsa incidunt,
          vitae praesentium esse corrupti distinctio dicta consequatur?
          Voluptatem, molestias accusantium?
        </p>
        <br />
        <br />
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
