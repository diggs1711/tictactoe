import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import ig from './ig.jpeg';
import Board from './Board/board.js';
import Cube from './Cube/cube.js';

console.log(ig);

function App() {
  return (
    <React.Fragment>
      <Cube />
      <Board />
    </React.Fragment>
  );
}

export default App;
