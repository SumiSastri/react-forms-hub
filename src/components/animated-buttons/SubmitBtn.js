import React from 'react';
import './button.css';

const SubmitBtn = ({ handleFormSubmit }) => {
    return (
        <div>
            <button className='button-one' data-testid='btn-submit' name='btn-submit' type='click' onClick={handleFormSubmit}>
                Submit
        </button>
        </div>

    );
};

export default SubmitBtn;









