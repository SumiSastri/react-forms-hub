import React from 'react';
import Modal from 'react-modal'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainForm from './components/mainForm';
import './App.css';

Modal.setAppElement('#root')
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
