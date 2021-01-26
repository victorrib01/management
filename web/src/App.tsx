import React from 'react';

import './styles/global.css'

import Routes from './routes';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <Routes/>
    </div>
  );
}

export default App;
