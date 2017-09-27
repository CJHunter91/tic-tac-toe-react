import React from 'react';
import ReactDOM from 'react-dom';
import Game from './container/game.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <Game/>,
    document.getElementById('app')
  );
});
