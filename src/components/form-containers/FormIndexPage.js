import React from 'react';

import FormHeader from '../navbars/formHeader';
import FormFooter from '../navbars/formFooter';
import PostIndex from '../content-pages/PostIndex'


 const FormIndexPage = () => {
 
    return (
      <div className='main-form-container'>
        <FormHeader />
        <PostIndex />
        <FormFooter />
      </div>
    );
  }
  export default FormIndexPage
