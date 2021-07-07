import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Main from './components/Main/Main';
import ResetButton from './components/ResetButton/ResetButton';




function App() {
  return (
    <div>
      <Main/>
      <ResetButton/>
    </div>


  );
}

export default App;