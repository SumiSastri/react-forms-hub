### React-form hub
The purpose of this documentation is to provide access to this repo. 
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

I would like this to be my one-stop shop to reference as a resource for form-creation using React as a library. It is a work-in-progress side-project that I will update intermittently.

More detailed documentation in the filepath[src/components/docs]

### Dependency list

- React * npm install -D react react-dom  react-scripts
- React-Router 
* npm install -D react-router react-router-dom --save
- Libraries
* npm install -D classnames react-icons react-modal react-datepicker formik yup --save
- Server & json-db
* npm install -D json-server concurrently

__CDNs__

Formik:

```
 <script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>
```

Material UI:
Causes conflicts with vanilla CSS - not used in this repo - commented out in ```index.html``` file

```
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```    
__Quick reference - documentation links__

This is a quick reference guide to all the libraries and official documentation of code used in this repo. 

- json-server [https://www.npmjs.com/package/json-server]
- React Icons (includes Fontawesome, Devicons, Ionicons, Game Icons, Weather Icons, Ant Design, GitHub, Feather Material-ui & Typicons) [https://react-icons.github.io/react-icons/]
- React Modals [https://www.npmjs.com/package/react-modal]
- React Date Picker[https://reactdatepicker.com/]
- React Select (drop-down select filters)[https://react-select.com/home]
- React Loading Animations
- Formik [https://formik.org/docs/overview]
- Yup[[https://github.com/jquense/yup]

__Quick reference resources - blogs, tutorials, videos__

React-Redux forms (How to choose between Redux Store and React State [https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978])

Form Validation:
Tutorial playlist for forms:
https://www.youtube.com/playlist?list=PLtvX0WpNqnvPWQhzPpoTPDb2ZnVUresVb

Chris Blakely:
https://www.youtube.com/watch?v=8hU0I8rY4u4&ab_channel=ChrisBlakely
Brian  Tutorial: [https://www.youtube.com/watch?v=KGFG-yQD7Dw&ab_channel=BrianDesign]
 
JSON-server
Jason Rivera (tutorial)[https://www.youtube.com/watch?v=3PmNHeVAHOk&ab_channel=JasonRivera]
Blogs: JournalDev [https://www.journaldev.com/10660/json-server]

Formik:
Jared Palmer Taming Forms in React [https://formik.org/docs/overview]
Formik Official Tutorial[https://formik.org/docs/tutorial]
Code for tutorial[https://codesandbox.io/s/formik-v2-tutorial-final-ge1pt]


CodeEvolution React-Formik[https://www.youtube.com/watch?v=Yw27J-AFlk0&ab_channel=Codevolution]
