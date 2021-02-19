## Handling Validation and Errors with the Formik HoC

The purpose of this documentation error handling methods in the Formik library and how to display error messages

__ErrorMessages with Formik__

- The Formik error object is called on all these three events
 1. onChange
 2. onBlur 
 3. onSubmit

Validation is automatically handled on these three events and submission blocked
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
- The ```isValid()``` method must be true for the form to submit - this can be manually disabled by setting it to false
```
<button className="btn-5" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
```