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

    installing express to create the server
    install nodemon for dev with  npm i nodemon --save-dev
    change the start method in the package.json to start the server with nodemon
    with adding "start": "nodemon server.js" in script
    putting the data in the backend folder so we fetch the data from server instead of hardcodding it

### 5. fetch the products from backend

    add "proxy": "http://localhost:5000", in your package.json in frontend change the url to your url of your server
    instal axios
    use useState and useEffect hooks to fetch data from backend
