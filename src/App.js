import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import Login from './views/Login';
import About from './views/About';
import Home from './views/Home';
import Secret from './views/Secret';
import { connect } from 'react-redux';
import NoMatch from './views/NoMatch';
import * as authActions from './actions/authActions';

const App = ({ isAuthenticated, logout }) => {
  return (
    <div className='App'>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/secret'>Secret</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/login' component={Login} />
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path='/secret'
            logout={logout}
            component={Secret}
          />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
