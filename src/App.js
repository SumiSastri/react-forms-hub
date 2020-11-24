import React from 'react';
import MainForm from './components/mainForm';

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='app-root'>
      <Route exact path ='/' component={MainForm} />
    </div>
    </Router>
  );
}
export default App;
