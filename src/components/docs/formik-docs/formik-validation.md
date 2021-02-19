## Formik 

The purpose of this documentation is outline the how to validate Formik forms with the Formik validate method.

__Handling Validation of the Form HoC__
Documentation[https://formik.org/docs/guides/validation]
Reading: Smash Magazine [https://www.smashingmagazine.com/2020/10/react-validation-formik-yup/]
Nested objects code sandbox [https://codesandbox.io/s/loving-liskov-7icmo]


Validation at a top level with the Form HoC is also possible with 2 methods using the ```renderProps()``` method on the Form HoC.

The props that the Form HoC receives are destructured and JSX tags returned.

```
<Formik>{ (formik) => {return(<Form/>}) }</Formik>
```
Now we have access to the ```formik``` props and its methods

Log the props in the console to see what props you have access to

- Validation can happen at the field level with custom functions
- Validation happens when the form is visited, on blur and on submit
- Submission fails if fields are not validated - this happens automatically with the ```isValid()``` method, if the errors object is empty, the method is set to true, it allows you to see if there are errors at any point of form submission
- the ```validateOnMount()``` validates on mount rather than 
