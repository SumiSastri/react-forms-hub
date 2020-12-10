### Storybook & React - Form tutorials
- Repo access
- $git clone sha-key
- $yarn or yarn install
- $yarn run start

or
- $yarn init
- $yarn add [package] --dev
($yarn add react react-dom react-router react-router-dom react-scripts)
- $yarn run start

Yarn usage documentation:
https://classic.yarnpkg.com/en/docs/usage

Yarn workflow:
https://classic.yarnpkg.com/en/docs/yarn-workflow
Yarn install flags:
https://classic.yarnpkg.com/en/docs/cli/install
Yarn add:
https://classic.yarnpkg.com/en/docs/cli/add


### Folder structure

- folders with paired .js and .css files closely couple components and enable simple styling
- form inputs, filters, buttons and progress bars are the main functional components

A note on form styling: 
- Checkboxes are particularly difficult to set-up and style as the default behaviour is rigid. The CSS code block is incorporated from W3 schools and CSS Tricks
- All form input fields defaults are to turn blue on interaction to neutralise this behaviour inputs can be be styled `outline: none;`
- Navbars are also tricky to style (especially burger buttons) I found Bulma as a framework really useful for navbar styling along with Flexbox and Grid to style elements/ rows and columns. This is another useful CSS resource for styling [https://university.webflow.com/article/navbar-styling] Using background colors, padding and margins around every navbar element also helps understand how each of the elements fit together. Flexbox and grid are both useful ways to align items.

### Libraries
yarn add  react-icons react-modal '@tippy.js-react'

- React Charts

- React Icons (includes Fontawesome, Devicons, Ionicons, Game Icons, Weather Icons, Ant Design, GitHub, Feather Material-ui & Typicons)
https://react-icons.github.io/react-icons/

- React Modals
https://www.npmjs.com/package/react-modal

- React Loading Animations

- React Date Picker

Tutorial playlist for forms:
https://www.youtube.com/playlist?list=PLtvX0WpNqnvPWQhzPpoTPDb2ZnVUresVb

### React-Redux Forms

React-Redux Forms are a powerful combination of libraries to keep state in forms dynamic and controlled (virtually mimicking the functionality of HTML forms that holds state at all time). Forms handle a high load of ui-changes. Some of these changes are immediate changes (synchronous) and some of them are based on event handlers being triggered (asynchronous). These synchronous and async changes are maintained and updated more deeply and dynamically in React-Redux forms.

Ideally data should be stored server side in redux to increase stability of the app’s store, but it can also be run client side as a predictable state container for javascript.

It can be stored project by project with a store wrapper as it is very light (2KB) including all dependencies, it makes the app and form handling fast and easy to install in legacy systems.

For projects - [npm install redux react-redux] in your node package manager if you do not have it installed
[npx create-react-app] to install the create the react app

To install both dependencies into one project [npx create-react-app “name of project”][npm install redux react-redux --save] [redux-thunk -- save] or [yarn add redux react-redux redux-thunk]

install react and redux chrome extentions and command/alt/i (mac) to see console for debugging
connect redux chrome extension in store

#### What is redux

It is a form of data-flow control - Dan Abramov and Andrew Clark 2015 influenced by ELM & React-flux.

More in this article https://medium.com/@jtbennett/standard-actions-in-redux-c6a415c8aea4

Data flows from the component via an action (or payload) the action is dispatched to the store which has a reducer.
Functions from the reducer run and are sent back to the component the state is updated and rendered.

#### Benefits of Redux

- redux is a load package manager that saves a lot of boiler plate code
- there is only one store for data (state) of the form in the redux store
- data flows are predictable and stable as they are unidirectional (from parent to child)
- they follow the same lifecycle method in a predictable pattern
- solves the problem in React where data can only flow from the parent to the child, therefore can not flow from the child to parent, grandparent or sibling components
- scale an app when there is a need to change state in multiple places. Redux in the app complexity curve Browser-based data in DOM / react-js (data in state in components/ virtual DOM) / react-redux (only one set of state in store, no data in components)

#### Data Flows in Redux:

From components via actions to store (with forms through higher order components (HOC’s)
From store via dispatch actions to component
Component subscribes and unsubscribes to changes (higher order components have specialised methods to handle API payloads)
Component renders

Store (Step1)

- Store is an object
- It holds state, which is immutable in one place, preventing “ghost” instances of data (state) in the app
- It is the one source of truth (stable data and eliminates ‘lurking’ copies of state in the app)
- It has a base dispatching function that synchronously sends the action object, along with the state tree to the reducer function
- Components send information to the store via actions
- Redux forms need additional set up to work with store through some specialised methods and higher order components (HOC’s). The reduxform() method takes the form configuration object and returns a new function that wraps the changes coming in specifically from form actions
- There are three states in the store:-
  - Pristine (default state)
  - Touched
  - Error - returns rejected props based on custom functions and the conditions written into those functions

Map functions are used to transport data as they create a duplicate copy of the information without transforming the original information

Actions (Step 2)
Actions are objects that represent the intention to change state
Actions are the only way to get data from components into the store
Actions always have a type - it is recommended that it type is a string constant as strings can be serialised
With forms (and their higher order components) the form type is the <Field> type
Action payloads represent the data related to the action
Actions represent the value parameter passed into the reducer method, store is the accumulator
Actions are the values passed to the reducer method via the store, along with the the state-object which is the state-tree in the store

Reducers: Step 2
Reducers or the reducing function reduce the collection of values of the actions to one action
It is a use case for the higher order function reduce(fold)/ array.reduce() method where multiple values are passed with the view to getting a single new value without changing the state of the original data passed in
Several reducers can be combined into a single root reducer with the combineReducers method

reducer(accumulator, values){} the accumulator is the state tree, values are the actions object several reducers can be combined into one reducer through the
formReducer() - is the specialised reducer that gets its information from actions related to higher order components that send the form payloads to the store.
combineReducers(){} method for the root reducer, calls all child reducers and gathers their result into one function, keys of the action correspond to the keys of the passed reducer function

State is changed by reducers (pure functions with no side-effects) takes the old (current) state in the form and returns the new state uses a switch statement, switch statements makes sure that both the type and the arguments on either side of the conditional operator are absolutely true (both in type and in from).
Some general rules for reducer functions: -

- Reducer changes state via pure functions
- The functions written in a reducer determines the changes needed or how state can be mutated - usually done with conditionals (switch)
- If no change is needed the previous state is returned to the component and no updates are made
- Root reducer combines all the changes required from multiple reducer functions
- Pure functions means no api-calls, routing transitions returned in the reducers
- Functions with dependencies like Math/ date functions (math.random/date.now) can not be passed

Subscribe/ Unsubscribe (Step 3)
Set up Subscribe - The components that need to be aware of state subscribe to the store
_ components are set up with listeners to subscribe to these payload changes via the subscribe(listener) method
_ you can also unsubscribe by switching the listener off

Components listen for changes and switch from subscribe (listening to changes and performing the render function according to these changes) and unsubscribing when the changes have been executed

With forms, higher order components (HOCs) connect the form components to the store object. Form components have several event listeners, the redux form method looks at all of these event listeners and ensures that the higher order components are set up to register listeners of events and unregisters these listeners in the Store.
This is specifically important for the handleSubmit (onSubmit) event handler. Other events are - on-input change, api calls for search filters and drop-down select filters, onclick events. On keyboard, mouse and other changes are also important to track form engagement via user experience events. This higher order component, is exported at the bottom of the form - export default reduxForm({})

Dispatch (Step 4)
The dispatch function is the only way to trigger a change in state
The function when run - either sends the action and state tree data to the reducer to be transformed

- or calls the reducer function - When it calls the reducer function, it notifies component listeners to the “next” change in the state tree - rejects the props with errors and dispatches error messages - maps the “next” change in the state tree to the component - When it dispatches actions and state to the reducer, there are custom functions that are written in middle ware and passed to the base-dispatch function. Custom dispatch function accepts sync or async actions via middleware. Middleware wraps the base dispatch function and can transform, delay, ignore, the payload, and pass the information down the middleware queue of data. Middleware will eventually dispatch a plain object actions using the dispatch method.

The base dispatch function always synchronously sends actions to the stores reducers along with the state tree to calculate the new state, actions are plain objects ready to be consumed by the reducer

Once the store receives the information from actions and converts these actions that update state the new state needs to be dispatched back to the components via the dispatch method.

The dispatch method therefore takes the information from the reducer and dispatches it back to components.

The store receives the map methods and via the dispatch(action) method converts the action payload to the dispatch payload
Set up Dispatch changes to the components that have subscribed to the changes
_ store.dispatch(action) function
_ function mapDispatchToProps(dispatch) - can send user data like admin fields, how toggles change, error handling

#### Redux forms and onSubmit

OnSubmit(values) are passed as a JSON object - custom functions- handles both state and validation is required by a type

- Errors return rejected props based on certain conditions and on the
- .then()
- .throw new Submission Error({})
- .catch()

View or Render (Step 5)
These dispatch functions are connected via the {connect} import to the counter component and exported back to the store
_ Displays data provided by store via the smart (stateful) pass down functions via props(are functions) to dumb (stateless) components
_ The stateless component provide information to the smart (stateful) components if any action is required (via the functions or props they receive and send back) as call back functions in the smart (stateful) component
_ Provider
_ Wraps the redux component into the redux library framework

Index.js registers the ReactDOM.render() method which registers the react virtual DOM, redux is a wrapper in react via the provider so it is passed as a prop of the react main.js (or app.js) component

Reading list:
Redux Tutorials
Basics:
https://react-redux.js.org/introduction/basic-tutorial
On the store:
https://react-redux.js.org/using-react-redux/accessing-store

Redux: Crash-course and reading materials
https://www.youtube.com/watch?v=wjTAhHSKuPg

Traversy Media
https://www.youtube.com/watch?v=93p3LxR9xfM&t=1003s

Documentation:
https://react-redux.js.org/introduction/quick-start
