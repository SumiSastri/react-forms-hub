import React from 'react';
import '../styles/navbarStyles.css';
import logo from '../assets/navbar-logo.svg';
import {LoginModal} from '../form-containers/LoginModal'

const FormHeader = () => {
  return (
    <div className='navbar-header-container'>
      <div className='navbar-header-branding'>
        <img className="navbar-logos-branding" alt='logo' src={logo} />
        <h1 className="navbar-header-text">A Library of Form Inputs</h1>
      <LoginModal/>
      </div>
    </div>
  );
};
export default FormHeader;
