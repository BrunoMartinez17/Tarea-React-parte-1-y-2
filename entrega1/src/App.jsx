/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Paises from './Componente1.jsx';
import ChampValorant from './Componente2.jsx';


const App = () => (
  <div className={styles.App}>
    <h1>Tarea 1</h1>
    <Paises />
    <ChampValorant />
  </div>
);

export default App;