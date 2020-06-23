// eslint-disable-next-line
import React, { component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './component/Layout';
 
function App() {
  return (
    <React.Fragment>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component= {Home}/>
          <Route  path= "/about" component= {About}/>
          <Route  path= "/contact" component= {Contact}/>
          <Route   component= {NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
