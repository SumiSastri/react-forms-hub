## Formik 

The purpose of this documentation is to demonstrate the difference between React Forms or controlled components vs Formik as a library used to build forms.

__Documentation__[https://formik.org/docs/overview]

__Formik advantages__

Jared Palmer Taming Forms in React [https://formik.org/docs/overview]

The video above is useful as it says you do not need to use Formik for all forms. You can use a mix of React forms and Formik - do whatever is least akward.

Formik is not a silver bullet for form state-management it is merely a tool. It uses Hooks to plug into the React library (useFormik Hook)

- Good community - over 1-mil users
- Scalable, easy form-builder (internationalisation)
- Testing
- Integrates well with validation with Yup

- Manages form data - ```useFormik({})``` with the hook that takes the values of initial state 

- Form submission - ```formik.submit()``` has a method that handles submit, writes the event prevent default method and logs the form values (which is it's main argument) to the console. You can then write methods to direct the information to the right api. The method tracks the most updated value of the input

* More about the handleSubmit helper function in the documentation[https://formik.org/docs/guides/form-submission]
* Async submission [https://formik.org/docs/examples/async-submission]

- Form validation - ```formik.validate()``` validation object takes the values field as its main argument and logic can be written to validate each field

* More on validation from the documentation [https://formik.org/docs/guides/validation]

- Error message display - ```formik.errors()``` tightly coupled with validation and the error message can be displayed with conditional rendering

- Reducing boiler plate - ```formik.values()``` is tightly coupled with the name and ```onChange``` JSX attributes.

- Reducing boiler plate with the ```formik.getFieldProps()``` method - replaces the name, 

- Tracks changes with the ```formik.touched()``` method which tracks the first interaction with the input field the method is called on the first keystroke in the input field

- Animations - ```formik.onBlur()``` a method that adds css animation it is tightly coupled with the ```formik.touched()``` method if a field has been visited the ```formik.onBlur()``` method is called

## Reusable Formik components 
A higher order component (HoC) returns the ```<Formik>``` container with its props and methods. It is an HoC created with the ```useContext``` Hook.

__Formik__

Top level HoC and its props

```
<Formik 
		initialValues={formValues || initialValues} 
		validationSchema={validationSchema} 
		onSubmit={onSubmit}>
 ```       
__Form__

This component replaces the form JSX tag and has an implicit ```onSubmit``` wrapped in the top-level Hoc ```<Formik>```

__Field__

1. Hooks inputs to top-level Hoc ```<Formik>```
2. Name attribute linked to the form state
3. Renders a JSX input tag with all the React functionality

__ErrorMessage__

- Create a React Error Message functional component
- Import it into the form
- Use the HoC ```ErrorMessage/ >``` use the React Error Message component you have created as a prop

Other options:
React Forms (Vanilla React and Form Hooks)
React-Redux forms (How to choose between Redux Store and React State [https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978])


Sandboxes:

```
https://codesandbox.io/s/zKrK5YLDZ
```

Useful Tutorials:
CodeEvolution React-Formik[https://www.youtube.com/watch?v=Yw27J-AFlk0&ab_channel=Codevolution]

Official Tutorial[https://formik.org/docs/tutorial]
Code for tutorial[https://codesandbox.io/s/formik-v2-tutorial-final-ge1pt]