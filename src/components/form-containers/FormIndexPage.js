import React from 'react';

import FormHeader from '../navbars/formHeader';
import FormFooter from '../navbars/formFooter';
import InputsModal from './InputsModal'
import PostIndex from '../content-pages/PostIndex'


 const FormIndexPage = () => {
 
    return (
      <div className='main-form-container'>
        <FormHeader />
        <br></br>
        <h2>Modal with form inputs</h2>
        <br></br>
        <InputsModal />
        <br></br>
        <PostIndex />
        <FormFooter />
      </div>
    );
  }
  export default FormIndexPage
