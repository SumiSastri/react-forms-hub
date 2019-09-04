import React, { Component } from 'react';
import InputText from './form-input-fields/form-input-text';
import InputNumber from './form-input-fields/form-input-number';
import InputPassword from './form-input-fields/form-input-password';
import Button from './form-buttons/button';
import SelectFilter from './form-select-filters/filter';
import Checkbox from './check-boxes/checkbox';
import FormHeader from './form-navbars/formHeader';
import FormFooter from './form-navbars/formFooter';

class MainForm extends Component {
  render() {
    return (
      <div className='main-form-container'>
        <FormHeader />
        <InputText />
        <InputNumber />
        <InputPassword />
        <Button />
        <SelectFilter />
        <Checkbox />
        <FormFooter />
      </div>
    );
  }
}
export default MainForm;
