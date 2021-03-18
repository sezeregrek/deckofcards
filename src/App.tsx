import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import {
  Example1a,
  Example1b,
  Example2a,
  Example2b,
  Example3,
  Example4,
  Example5,
} from "pages";

function App() {
  return (
    <div className="w-full max-w-4xl h-full">
      <Router>
        <nav className="w-full grid grid-cols-3 gap-4 py-6 border-b border-gray-400">
          <NavLink activeClassName="text-blue-700" to="/example1a">
            1- useState hook
          </NavLink>
          <NavLink activeClassName="text-blue-700" to="/example1b">
            2- useReducer hook
          </NavLink>
          <NavLink activeClassName="text-blue-700" to="/example2a">
            3- context basics
          </NavLink>
          <NavLink activeClassName="text-blue-700" to="/example2b">
            4- context & useReducer hook
          </NavLink>
          <NavLink activeClassName="text-blue-700" to="/example3">
            5- fetch data basic
          </NavLink>
          <NavLink activeClassName="text-blue-700" to="/example4">
            6- fetch data with react-query
          </NavLink>
          <NavLink activeClassName="text-blue-700" to="/example5">
            final project
          </NavLink>
        </nav>
        <div className="w-full pt-8">
          <Switch>
            <Route path="/example1a" component={Example1a} exact />
            <Route path="/example1b" component={Example1b} exact />
            <Route path="/example2a" component={Example2a} exact />
            <Route path="/example2b" component={Example2b} exact />
            <Route path="/example3" component={Example3} exact />
            <Route path="/example4" component={Example4} exact />
            <Route path="/example5" component={Example5} exact />
            <Redirect to="/example1a" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
