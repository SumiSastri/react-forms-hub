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
 - Add React Router [yarn add react-router-dom] 

### Input fields with CSS

- folders with paired .js and .css files closely couple components and enable simple styling
- form input fields are three types - text, numbers and password
- numbers are limited to incrementing or decrementing numbers with a select field, it seems to be better to strictly type a text field with typescript definig the type of input as the behaviour is not user friendly - you can type any number or math operand but they will get overwritten by the selector. The field is only useful for single digit increments of numbers to work like a counter
- outlines on interaction with input fields turn to blue by default, to neutralise this behaviour inputs can be be styled `outline: none;`
- interaction with input fields can also be changed in css with the focus attribute, this changes the `.input-field-two:focus { background-color: lightslategray; color: wheat; }`
- passwords are invisible when typed

### Storybook

- Stories folder will have initial files once added to your project and package json files will have the dev scripts and dependencies

```
  "devDependencies": {
    "@storybook/addon-actions": "^5.1.11",
    "@storybook/addon-links": "^5.1.11",
    "@storybook/addons": "^5.1.11",
    "@storybook/react": "^5.1.11"
  }
}
```

Yarn start will start the app but you will need to run storybook separately - check scripts for commands

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "storybook": "start-storybook -p 9009 -s public",
    "build-storybook": "build-storybook -s public"
  },
```
