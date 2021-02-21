**Steps to create a reusable component for inputs**

1. Input feilds are used to capture user inputs, the JSX is an ```<input>```tag that accepts props

2. Import the react library and create a functional component with an ```<input>```tag and make a list of all the props you will require.

I order the props first by styling and rendering - as the first step is to see how they look on a page, then the tightly coupled props with the change handlers so that I can ensure the naming conventions match when the handler functions are written, then the tests and validation which are coupled with the submission process

```
<!-- styling  -->
className={className}
type={type}
<!-- rendered values -->
label={label}
placeholder={placeholder}
<!-- tightly coupled with change events -->
name={name}
value={value}
<!-- change handlers -->
onChange={onChange}
<!-- validation or testing -->
datatestid={datatestid}
id={id}
required={required}
onSubmit={onSubmit}
```

3.  Prop types adds a simple type-validation for the reusable component - these are in alphabetical order

See example in[src/components/input-fields/FormInputComponent.js]

4. Import this component into the form that you require it to be used in and populate props bespoke to the needs of the form in question.

__Formik__

1. Create the Input field with the Formik Library and the HoC Field component
2. Import the Formik Error message component that has been created with Formik Error object
3. The Form props are control, label, name and type - control is input
4. Write the switch statement that controls the control prop - case is input
5. Import and use in a form 
 - define initial value
 - set validation rules
 - populate props