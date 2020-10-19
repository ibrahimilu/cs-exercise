import React from 'react';

import { css } from '@emotion/core'

import DataGrid from "./components/Grid";

import './App.css';
import styles from './components/Grid/styles';

function App() {
  return (
    <div className="App" styles={css(styles)}>
      <DataGrid />
    </div>
  );
}

export default App;
