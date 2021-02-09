### React-form hub
- Repo access
- $git clone 
- $npm init -y
- $npm run start
- Removed yarn as a package manager

### Available scripts
In package-json once the json-db created

```
"scripts": {
    "start": "react-scripts start",
    "json-server":"json-server --watch db.json --port 5000",
    "dev": "concurrently \"npm start\" \"npm run json-server\""
  },
```

### Ports

:3000 for FE
:5000/ posts
:5000/ comments 
:5000/ profile for json-server db resources

Proxy: ``` "proxy": "http://localhost:5000",```

### Project goals

This is an experimental, personal side-project to understand forms with React/ React-Hooks / React-Redux, TypeScript, front-end validation and testing-libraries.

It is a work-in-progress project, where I update sections as I learn and understand how each of the moving parts work in conjunction with each-other.

### Dependency list

- React * npm install -D react react-dom  react-scripts
- React-Router * npm install -D react-router react-router-dom
- Libraries
* npm install -D classnames react-icons react-modal react-datepicker
- Server & json-db
* npm install -D json-server bootswatch concurrently

Documentation:
- React Icons (includes Fontawesome, Devicons, Ionicons, Game Icons, Weather Icons, Ant Design, GitHub, Feather Material-ui & Typicons)
https://react-icons.github.io/react-icons/
- React Modals
Documentation[https://www.npmjs.com/package/react-modal]
- React Date Picker
Documentation[https://reactdatepicker.com/]
- React Select (drop-down select filters)
Documentation[https://react-select.com/home]
- React Loading Animations


Research:
Form Validation:
Tutorial playlist for forms:
https://www.youtube.com/playlist?list=PLtvX0WpNqnvPWQhzPpoTPDb2ZnVUresVb

Chris Blakely:
 https://www.youtube.com/watch?v=8hU0I8rY4u4&ab_channel=ChrisBlakely

 Jason Rivera:
 https://www.youtube.com/watch?v=3PmNHeVAHOk&ab_channel=JasonRivera

