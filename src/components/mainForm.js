import React, { Component } from 'react';

import FormHeader from './navbars/formHeader';
import FormFooter from './navbars/formFooter';
import FormInputs from '../components/input-fields/FormInputs'
import FormFilters from '../components/filters/FormFilters'


class MainForm extends Component {
  render() {
    return (
      <div className='main-form-container'>
        <FormHeader />
        <h2>Inputs</h2>
        <FormInputs />
        <FormFilters />
        <FormFooter />
      </div>
    );
  }
}
export default MainForm;
