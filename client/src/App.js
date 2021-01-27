import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home'
import ChooseGame from './components/ChooseGame/ChooseGame';
import AddGame from './components/Games/AddGame/AddGame';
import SubtractGame from './components/Games/SubtractGame/SubtractGame';
import './App.scss'


const App = () => {
  return (
    <BrowserRouter className="cursor">
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/choosegame/subtractgame' component={SubtractGame}/>
          <Route path='/choosegame/addgame' component={AddGame}/>
          <Route path='/choosegame' component={ChooseGame}/>
        </Switch>
    </BrowserRouter>
  );
};

export default App;