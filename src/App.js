import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./componets/Create";
import BlogDetails from "./componets/BlogDetails";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
