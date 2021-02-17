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

- Use known React Library methods

__renderProps() Method__

This is essentially a React Library method 
Documentation[https://reactjs.org/docs/render-props.html]

1. Uses a function as a prop that is passed from parent to child
2. Called ```renderProps()``` as a method but the actual prop can be named anything - eg. children, render, show, display etc.,
3. Link it to Formik by passing in props as an arg to the function

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
4. Renders the HoC wrapped with functionality of handling change, handle blur and the value of the form field via the name attribute
5. Passes through any additional props you require - like id, placeholder, etc.,
6. Type of field - text area/ number/ password etc. (as prop used instead of type)


__FieldArray__ 

- Helps with list manipulation
- Uses the renderProps() method to return a function that renders the children of this HoC
- This function automatically gets props that help return the JSX of the elements of the array dynamically
- Convention of naming the props of this function is ```fieldArrayProps``` if you log these props in the console you will see the methods and values available in this props object
- There are also the Formik form object to use methods from this object - here are the values property to track the values as they change
- Rendering an array of elements with this HoC - This is good for adding and removing items in a shopping cart

__Fast Fields__

- Use if more than 30 fields in a form
- Used for optimisation
- Rerenders only once - only few instances when it re-renders
- Field has to be independent of other fields in rendering
- Also good for complex validation
- Documentation says use with caution

## Handling Validation and Errors with the Formik HoC

- The Formik error object is called on all these three events
 1. onChange
 2. onBlur 
 3. onSubmit

Validation is automatically handled on these three events and submission blocked

__ErrorMessage__

- Create a React Error Message functional component
- Import it into the form
- Use the HoC ```ErrorMessage/ >``` use the React Error Message component you have created as a prop

- If you do not want auto validation the props ```validateOnChange``` & ```validationOnBlur``` can be set to false, it validation is true by default.

```
validateOnChange={false} validateOnBlur={false}
```
Field level validation gives you the opportunity to build the validation function and assign it to the validation prop on the field. 

It makes writing custom validation with complicated logic outside the yup/ formik validation methods available.

For an error message to show, the field must be touched (visited) in addition to an error message if not touched then no error message in ui

```setFieldTouched()``` - this is for the idividual field nested objects and arrays need you to specify the name attribute of the field
```setTouched()``` this is all

__Handling Validation of the Form HoC__
Documentation[https://formik.org/docs/guides/validation]
Reading: Smash Magazine [https://www.smashingmagazine.com/2020/10/react-validation-formik-yup/]
Nested objects code sandbox [https://codesandbox.io/s/loving-liskov-7icmo]


Validation at a top level with the Form HoC is also possible with 2 methods using the renderProps() method on the Form HoC.

The props that the Form HoC receives are destructured and JSX tags returned.

```
<Formik>{ (formik) => {return(<Form/>}) }</Formik>
```
Now we have access to the ```formik``` props and its methods

Log the props in the console to see what props you have access to

__Resources__

* Sandbox

```
https://codesandbox.io/s/zKrK5YLDZ
```

Official Tutorial[https://formik.org/docs/tutorial]
Code for tutorial[https://codesandbox.io/s/formik-v2-tutorial-final-ge1pt]


CodeEvolution React-Formik[https://www.youtube.com/watch?v=Yw27J-AFlk0&ab_channel=Codevolution]

