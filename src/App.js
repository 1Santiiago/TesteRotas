import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";

function App() {
  

  return (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/Contato">Contato</Link>
      </li>

      <li>
        <Link to="/Empresa">Empresa</Link>
      </li>
     </ul>
<Switch>
      <Route exect path="/">
        <Home/>
      </Route>
      
      <Route  path="/Contato">
        <Contato/>
       </Route>

      <Route  path="/Empresa">
        <Empresa/>
      </Route>  
</Switch>

  </Router>
  )
}

export default App;
