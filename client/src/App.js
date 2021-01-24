import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home'
import ChooseGame from './components/ChooseGame/ChooseGame';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/choosegame' component={ChooseGame}/>
        </Switch>
    </BrowserRouter>
  );
};

export default App;