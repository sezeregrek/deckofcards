import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Example1a, Example1b, Example5 } from "pages";

function App() {
  return (
    <div className="w-full max-w-4xl h-full">
      <Router>
        <nav className="w-full flex space-x-8 pt-6">
          <Link to="/">Example1a</Link>
          <Link to="/example1b">Example1b</Link>
          <Link to="/example5">Example 5</Link>
        </nav>
        <div className="w-full pt-8">
          <Switch>
            <Route path="/" component={Example1a} exact />
            <Route path="/example1b" component={Example1b} exact />
            <Route path="/example5" component={Example5} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
