import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './components/_reset.scss'
import './components/_main.scss'

import Start from './components/Start/Start'
import Mode from './components/Mode/Mode'
import Game from './components/Game/Game'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/mode" component={Mode} />
          <Route exact path="/normal" component={Game}/>
          <Route exact path="/hard" component={Game}/>
          {/* <Route path="/hard" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
