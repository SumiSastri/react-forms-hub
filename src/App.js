import React from 'react';
import Modal from 'react-modal'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FormIndexPage from './components/form-containers/FormIndexPage';
import './App.css';

Modal.setAppElement('#root')
function App() {
  return (
    <Router>
    <div className='app-root'>
      <Route exact path ='/' component={FormIndexPage} />
    </div>
    </Router>
  );
}
export default App;
