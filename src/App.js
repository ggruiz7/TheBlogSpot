import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./componets/Create";
import BlogDetails from "./componets/BlogDetails";
import FourOFour from "./componets/FourOFour";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
