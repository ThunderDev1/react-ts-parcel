import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const App: FunctionComponent<{}> = (): ReactElement => (
  <Router>
    <React.Fragment>
      <Nav />
      <Routes />
    </React.Fragment>
  </Router>
);

export default App;
