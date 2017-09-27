import React from 'react';
import ReactDOM from 'react-dom';
import Game from './container/game.jsx'
import GameLogic from './models/game'

window.addEventListener('load', function () {
  const gameLogic = new GameLogic();
  ReactDOM.render(
    <Game logic={gameLogic}/>,
    document.getElementById('app')
  );
});
