The purpose of this documentation is to outline how state is managed in React-Forms. State in forms is local and ephemeral (Dan Abramov) - in the sense it keeps changing as users access forms to input new data. 

State therefore in forms is controlled locally on the form page before it persists into the application's database or state-management toosl. 

External state-management tools like Redux are not essential for forms. State management in React forms the subject of a lot of debate and discussion. This is not an exhaustive guide.

__Documentation__

Official React documentation on forms[https://reactjs.org/docs/forms.html]

In brief forms in React are updated by the ```setState()``` method, state is not held internally as it is with HTML.

__Resources & Further Reading__


__What__ 

Forms are called controlled components because the React component that renders a form also controls what happens in that form on subsequent user input. 

As input state is controlled by the React-library's component, it is called a controlled component. It differs from a functional component or a class component in the sense that the inputs are dynamic and constantly changing - driven by what users input into the forms.

State-management, therefore, needs more thought with controlled components. Forms are also a security challenge - they are the first point of call for a hack-attack.

Forms extract user information and submit this information to a database. State therefore changes with every keystroke of the user. It is like one large uncontrolled component with no user information until the user decides to give us this information. Therefore state starts as null. It is ephemeral and does not persist unless the user gives you permission to save/ or submits this information.

Data is prone to errors, can be left out or forgotten, users may need to continue some other task and come back to filling forms. It is one of the least liked aspects of using an app. Therefore 
managing state is important and comes back to the point that state is ephemeral in forms.

__Why__ 

Forms and capturing the state in forms gives the business team insights into user needs. It is a way of transfering state from the user's dynamic inputs into a database. 

Forms are often abandoned, so saving information as the user inputs it, auto-completion and validation are important to sift out valuable state from hack-attacks. Malicious data from bots can input state into forms that provide incorrect or malicious information as a way of getting into the app servers.

Once again state-management in forms therefore needs to be more thoughtful and data-validated.

__Where__ 

Everywhere in all apps where data from the user is required. So state management may start from validating a form but it continues into managing the life-cycle of this state through the application - into the servers, databases and anywhere else that ephemeral data is expected to be secure and to persist.

__When__ 

When user needs to be captured updated deleted and submitted - the whole CRUD(create-update-delete) cycle.

__How__ 

This repo is an exploration of how state is managed with vanilla React/ React-Hooks/ the form library Formik and with state-management libraries.

It is work in progress as it is an exhaustive topic that constantly is being updated and changing.

**Gotchas**  
