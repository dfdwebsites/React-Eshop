# React Eshop

# fully functional eshop using react

## what you will find on commits

### 1. just creating the base

### 2. adding some producs

### 3. change the main div to 2 components

    React-router-dom for changing pages inside the app
    using params to get the page we are on
    change anchor tags with Link (to) to stop refreshing when change pages

### 4. setting the server with express

    https://expressjs.com/en/4x/api.html#app
    installing express to create the server
    install nodemon for dev with  npm i nodemon --save-dev
    change the start method in the package.json to start the server with nodemon
    with adding "start": "nodemon server.js" in script
    putting the data in the backend folder so we fetch the data from server instead of hardcodding it

### 5. fetch the products from backend

    add "proxy": "http://localhost:5000", in your package.json in frontend change the url to your url of your server
    instal axios
    use useState and useEffect hooks to fetch data from backend

### 6. replace useState with useReduce

    https://reactjs.org/docs/hooks-reference.html#usereducer
    use try catch so we can catch errors in the fetch
    use ternaries in the homescree to return errors or loading depending the state we are on

### 7. adding Bootstrap

    https://react-bootstrap.github.io/getting-started/introduction
    adding bootstrap and creating Bootstrap Components to style app

### 8. breaking homescreen to components

    using seperate components to render each product
    using rating components to render rating in each product
    using bootstrap to still components
    importing FA to be able to use icons

## 9. Creating Product Screen

    added on server new api to fetch each product
    add react-helmet-async to change title on each page
    competed the product page

## 10. Creating Loader and Message components

    added Loader Component to show loading spinner from bootstrap when you w8 for something to load
    added a Message Component to show messages
    added util fucntion to get the error and pass the error that the server sends
