## Controlled components in React

Forms are controlled components, as the user controls the input value of the form fields. Component ui in HTML change input values immediately as HTML holds the data in the input and renders it on the Document Object Model (DOM) immediately. 

In React, a copy of the DOM tree is created called the virtual DOM. Therefore state is held in class-based components and utility functions to update the value of the inputs based on event changes. For example handleInputChange() captures every key-stroke in the input-fields. The default state is then updated with the new state of the input field capturing the event's target value. State is now reset with the ```setState()``` method from the React component library. 

This updated is sent back to the state object and state is updated on the input change.

FormInputs is the parent component that holds the state of the form. It passes the state to the child components as props 
- InputText
- InputNumber
- InputPassword

Each of the child components, takes the relevant prop from the parent to update input changes.
Flavio Copes: On React Forms: (https://flaviocopes.com/react-forms/)