- React Select (drop-down select filters)
The purpose of this documentation is to provide a quick summary of how to create a select filter with the React-Select library

Documentation:
https://react-select.com/home

Install packages:
* npm install -D react-datepicker



Filters:
Call the data from an API set it to state in the ```componentDidMount()``` lifecycle method
Map over the response object and print list to render it in a relevant list component
To display an individual card deconstruct props and render it in the card component

Create a stateful index component
Import the search and the select filters into the index controlled component
Set state to the variables you want displayed by the index page
Write a utility function that sets the filter state and updates it if there are no errors


The search filter utility function is written in the render method
 Filter through the response object that has been called and set to state (displayPosts)
 Assign the function to a variable - identify the props to filter through - title & body
 Set both the search field and the returned filtered array to lowercase to match cases

 With the select filter create your data that you want to filter through - can be hardcoded in an array or filtered from the data in an API call

 If it is hardcoded import it into the Index component - set it to the data prop that has been created in the reusable component
 
 The value field 


 https://codesandbox.io/s/2qv78?module=/example&file=/example.js