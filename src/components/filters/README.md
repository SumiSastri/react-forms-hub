- React Select (drop-down select filters)
The purpose of this documentation is to provide a quick summary of how to create a select filter with or without the React-Select library

Documentation:
https://react-select.com/home

Select Filter (without the React-Select library)
Much of the select filter is about the css - a very basic select filter css helped rendering the component.

- The reusable filer is in SelectFilter
- It is used in the EnquiryForm 
- Data is imported from a JSOn file
- The option list is mapped into the select filter's option tags
- The change event is handled with the ```useState``` hook


Search Filter: In the PostIndexPage

-  Call the data from an API set it to state in the ```componentDidMount()``` lifecycle method
-  Map over the response object and print list to render it in a relevant list component
-  Import the the SearchFilter to the page
-  Replace the map method by the filter method - see comments on the page on how to refactor.
-  The search filter utility function is written in the render method
-  Filter through the response object that has been called and set to state (displayPosts)
-  Assign the function to a variable - identify the props to filter through - title & body
-  Set both the search field and the returned filtered array to lowercase to match cases


Research: 
Code Sandbox example: https://codesandbox.io/s/2qv78?module=/example&file=/example.js