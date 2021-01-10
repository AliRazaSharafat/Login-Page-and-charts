import React from 'react';
import AppBar from './Component/MUI/Appbar/Appbar';
import Login from './Component/MUI/Login/Login';
import Bar from './Component/Reports/Bar';
import Doughnut from './Component/Reports/Doghnut';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Login />
      <Bar />
      <Doughnut />
    </div>
  );
}

export default App;
