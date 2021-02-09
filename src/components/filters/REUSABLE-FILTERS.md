**Filter types and their adoption in forms**

Filters offer the user multiple ways of selecting and searching for data.

Drop-downs are good for small data-sets while a search covers larger bodies of text. 

The ```SelectFilterComponent``` is a reusable filter.

You can also use the library
- React Select (drop-down select filters)
Documentation:
https://react-select.com/home

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