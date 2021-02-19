## Reusable Formik components 

The purpose of this documentation is outline some of the reusable components that are shipped with the Formik library.

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

