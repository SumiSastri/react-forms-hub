import React, { Component } from 'react';
import FormHeader from './form-navbars/formHeader';
import Input from './form-input-fields/input';
import RadioButtons from './form-buttons/radioButtons';
import Button from './form-buttons/button';
import FormFooter from './form-navbars/formFooter';
import SelectFilter from './form-select-filters/filter';
import CheckBox from './check-boxes/checkbox'

class MainForm extends Component {
  render() {
    return (
      <div className='main-form-container'>
        <FormHeader />
        <Input />
        <CheckBox />
        <SelectFilter />
        <Button />
        <br />
        <br />
        <RadioButtons />
        <hr />
        <FormFooter />
      </div>
    );
  }
}
export default MainForm;
