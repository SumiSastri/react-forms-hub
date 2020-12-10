import React from 'react';
import '../checkboxStyles.css';

export const Checkbox = () => {
  return (  
      <div>
        <input 
          className=''
          checked={true}
          disabled={false}
          data-testid=''
          name='checkbox'
          onChange={()=>{}}
          onSubmit={()=>{}}
          required={false}
          type='checkbox'  
        />
      </div>
  );
};