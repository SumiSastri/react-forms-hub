import '../styles/inputStyles.css';

const InputPassword = ({ inputPassword, handleInputSubmit, updateFormInputs }) => {
  return (
    <div>
      <label>Password Field</label>
      <input
        className='inpt-3s'
        data-testid='passwrd'
        name=''
        onChange={updateFormInputs}
        onSubmit={handleInputSubmit}
        placeholder='use symbols, numbers, letters'
        required={true}
        type='password'
        value={inputPassword}
      />
    </div>

  );
};
export default InputPassword;


