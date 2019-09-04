import React, { Component } from 'react';
import Input from './form-input-fields/input';
import Button from './form-buttons/button';
import SelectFilter from './form-select-filters/filter'
import Checkbox from './check-boxes/checkbox'
import { Link } from 'react-router-dom';

class MainForm extends Component {
  render() {
    return (
      <Link to="/">
      <div className='main-form-container'>
        <Input />
        <Button />
        <SelectFilter />
        <Checkbox />       
      </div>
      </Link>
    );
  }
}
export default MainForm;
