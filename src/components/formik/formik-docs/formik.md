## Formik 

The purpose of this documentation is to demonstrate the difference between React Forms or controlled components vs Formik as a library used to build forms.

__Documentation__[https://formik.org/docs/overview]

Jared Palmer Taming Forms in React [https://formik.org/docs/overview]

__Formik advantages__

The video above is useful as it says you do not need to use Formik for all forms. You can use a mix of React forms and Formik - do whatever is least akward.

Formik is not a silver bullet for form state-management it is merely a tool. It uses Hooks to plug into the React library (useFormik Hook)

- Manages form data - ```useFormik({})``` with the hook that takes the values of initial state 
- Form submission - ```formik.submit()``` has a method that handles submit, writes the event prevent default method and logs the form values (which is it's main argument) to the console. You can then write methods to direct the information to the right api. The method tracks the most updated value of the input
- Form validation - ```formik.validate()``` validation object takes the values field as its main argument and logic can be written to validate each field
- Error message display - ```formik.errors()``` tightly coupled with validation and the error message can be displayed with conditional rendering
- Reducing boiler plate - ```formik.values()``` is tightly coupled with the name and ```onChange``` JSX attributes.
- Tracks changes with the ```formik.touched()``` method which tracks the first interaction with the input field the method is called on the first keystroke in the input field
- Animations - ```formik.onBlur()``` a method that adds css animation it is tightly coupled with the ```formik.touched()``` method if a field has been visited the ```formik.onBlur()``` method is called
- Reusable Formik components
- Good community - over 1-mil users
- Scalable, easy form-builder (internationalisation)
- Testing
- Integrates well with validation with Yup

Other options:
React Forms (Vanilla React and Form Hooks)
React-Redux forms (How to choose between Redux Store and React State [https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978])



Sandboxes:

```
https://codesandbox.io/s/zKrK5YLDZ
```

Useful Tutorials:
CodeEvolution React-Formik[https://www.youtube.com/watch?v=Yw27J-AFlk0&ab_channel=Codevolution]