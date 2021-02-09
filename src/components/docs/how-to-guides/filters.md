**Filter types and their adoption in forms**

Filters offer the user multiple ways of selecting and searching for data.

Drop-downs are good for small data-sets while a search covers larger bodies of text. 
Steps to create a drop down filter list. Example in [src/components/filters/SelectFilterComponent.js]
- React Select (drop-down select filters)


1. Import the react library
2. Create a functional component and deconstruct the props you would use
3. You are returning a ```select``` JSX tag
4. Between the opening and closing tags you are mapping the data choices into the ```options``` JSX tag
```
				
					{data.map((options) => (
						<option key={options.id} value={options.value}>
							{options.label}
						</option>
					))}
```                    			
5. Depending where your data is stored (state-management strategy) you can map the data into the ```options``` JSX


You can also use the React Select library

Documentation:
https://react-select.com/home

Search Filter - an example is in the file [src/components/content-pages/PostIndex.js]

The search filter is nothing but an input field. Functionality comes from the utility functions written in the component that imports the input field. Uncomment the FormInputField and you will see they work exactly in the same way. The only reason you may want to have a separate component is to style it differently.

Steps (in the file it is being called in)
1. Call the data from an API set it to state in the ```componentDidMount()``` lifecycle method
2. Map over the response object and print list to render it in a relevant list component
3. Replace the map method by the filter method - see comments on the page on how to refactor.
-  The search filter utility function is written in the render method
-  Filter through the response object that has been called and set to state (displayPosts)
-  Assign the function to a variable - identify the props to filter through - title & body
-  Set both the search field and the returned filtered array to lowercase to match cases






Research: 
Code Sandbox example: https://codesandbox.io/s/2qv78?module=/example&file=/example.js