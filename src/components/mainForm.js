import React, { Component } from 'react';
import Input from './form-input-fields/input';
import Button from './form-buttons/button';
import SelectFilter from './form-select-filters/filter'
import Checkbox from './check-boxes/checkbox'

class MainForm extends Component {
  render() {
    return (
      <div className='main-form-container'>
        <Input />
        <Button />
        <SelectFilter />
        <Checkbox />       
      </div>
    );
  }
}
export default MainForm;
