import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Example5 } from "pages";

function App() {
  return (
    <div className="w-full max-w-4xl h-full">
      <Router>
        <nav className="w-full flex space-x-8 pt-6">
          <Link to="/">Example1</Link>

          <Link to="/example5">Example 5</Link>
        </nav>
        <Switch>
          <Route path="/example5" component={Example5} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
