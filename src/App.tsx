import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Example1a,
  Example1b,
  Example2a,
  Example2b,
  Example3,
  Example5,
} from "pages";

function App() {
  return (
    <div className="w-full max-w-4xl h-full">
      <Router>
        <nav className="w-full flex space-x-8 py-6 border-b border-gray-400">
          <Link to="/">Example1a</Link>
          <Link to="/example1b">Example1b</Link>
          <Link to="/example2a">Example2a</Link>
          <Link to="/example2b">Example2b</Link>
          <Link to="/example3">Example3</Link>
          <Link to="/example5">Example 5</Link>
        </nav>
        <div className="w-full pt-8">
          <Switch>
            <Route path="/" component={Example1a} exact />
            <Route path="/example1b" component={Example1b} exact />
            <Route path="/example2a" component={Example2a} exact />
            <Route path="/example2b" component={Example2b} exact />
            <Route path="/example3" component={Example3} exact />
            <Route path="/example5" component={Example5} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
