__Updated:__

Added prop-types, cleaned up reusable components - HeaderComponent, FormInputComponent
Cleaned up styling to add a logo to the right

- Created backend server with json-server - initial research started on how to move hard-coded json in mock data to the be endpoint.

__Fixed:__
- Date Picker Library - as it already is a reusable component needs to be used directly in the component

Quick read through of documentation and some debugging research:-
StackOverflow: https://stackoverflow.com/questions/60864610/is-it-possible-to-use-react-datepicker-with-react-hooks-forms

https://www.laravelcode.com/post/how-to-implement-datepicker-in-react-with-example

- Conflicts with Material Ui - commented out CDN

__WiP-challenges to fix__ 

- "Date of payslip being queried" is required for the "Incorrect Pay" and "Missing Expense" options only - research needed for conditional rendering (approach would be to grab index of the values for conditional rendering) - still working on this 

- Validation - submission of null values allowed - need to research validation a little more

Done:
- Created reusable components for this task
- HeaderComponent.js 
- SelectFilter.js
- InputText.js
- ButtonComponent.js
- The DatePicker library was used for the date input ( I find the date object difficult to use)
- Simple validation - using the required field as a prop and conditional rendering
- Mock-data was created in JSON format 
- Some styling that I had in this forms hub used
- All of this did not take just 2 hours as I wanted to use React-Hooks (so a bit of a learning-curve)
- Thinking through reusable components also took more time but the view is that these could be reused once the initial work done.
