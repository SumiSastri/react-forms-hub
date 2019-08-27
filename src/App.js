import React from 'react';
import MainForm from './components/mainForm';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='app-root'>
      <MainForm />
    </div>
    </Router>
  );
}
export default App;
