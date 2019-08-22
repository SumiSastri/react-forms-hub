import React, { Component } from 'react';
import Input from './form-input-fields/input';
import Button from './form-buttons/button';

class MainForm extends Component {
  render() {
    return (
      <div className='main-form-container'>
        <Input />
        <Button />
            
      </div>
    );
  }
}
export default MainForm;
