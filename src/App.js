import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import LoginPage from './loginpage.component';
import ProductPage from './productpage.component';


const useStyles = theme => ({
  nav: {
    display: 'block',
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100vh',
    width: '70px',
    backgroundColor: '#fff',
    '&>ul': {
      listStyle: 'none',
      paddingLeft: '0'
    }
  }
});

class App extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Router>
        <div>
          <nav className={classes.nav}>
            <ul>
              <li>
                <Link to="/"><Icon>fast_food</Icon><br/>Login</Link>
              </li>
              <li>
                <Link to="/produk">Produk</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/produk">
              <ProductPage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withStyles(useStyles)(App);
