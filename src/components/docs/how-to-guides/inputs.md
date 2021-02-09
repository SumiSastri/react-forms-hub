**Steps to create a reusable component for inputs**

1. Input feilds are used to capture user inputs, CSS determines how they look and the onChange, onSubmit and value props determine the functionality.

2. Import the react library and create a functional component - the field can then be imported and applied depending on type - text, text-area, password, number.

3. To ensure the right data is captured front-end validation in the form of utility function should be written in the component where the input is being called.

4. Prop types adds a simple type-validation for the reusable component.

See example in[src/components/input-fields/FormInputComponent.js]
