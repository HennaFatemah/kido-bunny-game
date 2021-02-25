import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Home from './Pages/Home'
import ChooseGame from './components/ChooseGame/ChooseGame';
import About from './Pages/About';
import AddGame from './components/Games/AddGame/AddGame';
import SubtractGame from './components/Games/SubtractGame/SubtractGame';
import ExerciseGame from './components/Games/ExerciseGame/ExerciseGame';
import ScavengerHunt from './components/Games/ScavengerHunt/ScavengerHunt';
import SightWords from './components/Games/SightWordsGame/SightWordsGame';
import SoundGame from './components/Games/GKGame/GKGame';
import './App.scss';
import Share from './components/Share/Share';

const App = () => {
  
  return (
    <section className="main">
      <div className="main__sticky">
        <Share/>
      </div>
      
      <div className="main__page">
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/choosegame/soundgame' component={SoundGame}/>
              <Route path='/choosegame/sightwords' component={SightWords}/>
              <Route path='/choosegame/scavengerhunt' component={ScavengerHunt}/>
              <Route path='/choosegame/exercisegame' component={ExerciseGame}/>
              <Route path='/choosegame/subtractgame' component={SubtractGame}/>
              <Route path='/choosegame/addgame' component={AddGame}/>
              <Route path='/choosegame' component={ChooseGame}/>
              <Route path='/about' component={About}/>
            </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
};


export default App;