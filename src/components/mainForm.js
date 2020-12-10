import React, { Component } from 'react';

import FormHeader from './navbars/formHeader';
import FormFooter from './navbars/formFooter';
import InputsModal from '../components/input-fields/InputsModal'
import FormFilters from '../components/filters/FormFilters'
import PostIndex from '../components/content/PostIndex'


class MainForm extends Component {
  render() {
    return (
      <div className='main-form-container'>
        <FormHeader />
        <br></br>
        <h2>Form Input Fields</h2>
        <br></br>
        <InputsModal />
        <br></br>
        <h2>Form Filters</h2>
        <br></br>
        <FormFilters />
        <br></br>
        <PostIndex />
        <FormFooter />
      </div>
    );
  }
}
export default MainForm;
