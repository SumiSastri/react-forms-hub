### Storybook & React - Form tutorials

#### Set-up

- Create application:[npx create-react-app appname]
- Add Storybook:
  cd appname [npx -p @storybook/cli sb init]
- Run the test runner (Jest) in a terminal:
  [yarn test]
- Start the component explorer on port 9009:
  [yarn run storybook]
- Run the frontend app proper on port 3000:
  [yarn start]

### Input fields with CSS

- folders with paired .js and .css files closely couple components and enable simple styling
- form input fields are three types - text, numbers and password
- numbers are limited to incrementing or decrementing numbers with a select field, it seems to be better to strictly type a text field with typescript definig the type of input as the behaviour is not user friendly - you can type any number or math operand but they will get overwritten by the selector. The field is only useful for single digit increments of numbers to work like a counter
- outlines on interaction with input fields turn to blue by default, to neutralise this behaviour inputs can be be styled `outline: none;`
- interaction with input fields can also be changed in css with the focus attribute, this changes the  `.input-field-two:focus { background-color: lightslategray; color: wheat; }`
- passwords are invisible when typed