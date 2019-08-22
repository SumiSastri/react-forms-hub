import React from 'react';
import './form-navbars.css';
import logo from '../assets/iconmonstr-construction-10.svg';

const FormHeader = () => {
  return (
    <div className='navbar-header-container'>
      <div className='navbar-header-branding'>
        <img className="navbar-logos-branding" alt='logo' src={logo} />
        <h1 className="navbar-header-text">A Library of Form Inputs</h1>
      </div>
      <div className='navbar-header-content'>
        <ul className='navbar-links'>
          <li>Text, Numbers & Passwords</li>
          <li>Buttons</li>
          <li>Search & Select Filters</li>
          <li>Check-Boxes & Toggles</li>
          <li>Progress Bars</li>
          <li>Time & Date Pickers</li>
        </ul>
      </div>
    </div>
  );
};
export default FormHeader;
