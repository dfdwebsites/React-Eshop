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

## 11. Cart context

    https://reactjs.org/docs/context.html
    Use useContext and create a Provider to pass the 'cart' to children on the app
    Create a cart icon on Nav with Badge of items on the cart

## 12. Complete add Cart

    update addToCart to increase quantity in items instead of duplicating the item
    update data with id so each item is unique
    added server api for each product
    Badge show items in total combined with quantity

## 13. Create CartScreen

    Create CartScreen with button actions and all UI with bootstrap
    add the ability to add to cart from homescreen
    add increase quantity buttons and delete from cart
    make the cart to be saved in localhost for refresh

## 14. Create Signin Page

    Create Sign in Screen
    using useLocation() hook to get the url for the redirect for the signUp page

## 15.MongoDB

    https://mongoosejs.com/
    install dotenv to read env to backend
    create an atlas database or localhost one , env url file and instal mongoose to connect your backend server with the database

## 16. Create Routes and Models for server

    create Routes and Models for server
    switch data.js to fetch data from mongoDB

## 17. Create Sample Users

    create Model for user and add to seedRoutes the userModal
    create Admin and Customer user
    install bcryptjs to encrypt passwords of users

## 18. SignIn API

    create userRoutes to sign in users
    install express-async-handler to handle with errors
    install jsonwebtoken to generate tokens to AUTH users
    create utils file with the function to generate token

## 19. SignIn

    create signIn page and finish the form to submit to server to sign in
    use localstorage to keep users sign in
    create a NavdropDown menu for the user to see profile, order history and sign out

    https://fkhadra.github.io/react-toastify/introduction
    install react-toastify to show alert

## 20. Shipping and SignUp pages

    Create Shipping address page
    save address info in localStorage
    make CheckOut steps
    Create SingUp page
    Create a signUp router on the userRouter on backEnd

## 21. OrderScreen & Payment

    create OrderScreen , PaymentScreen and PlaceOrderScreen
    create OrderModel and OrderRoutes in backend
    orderRoutes for post an order and for getting an order
    create isAuth function to check if the user is authenticated

## 22. PayPal payment

    https://www.npmjs.com/package/@paypal/react-paypal-js
    https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default
    install react-paypal-js
    create a route to .put the order when is paid
    follow the react-paypal and the paypal doc to use the APIS
    make condintion rendering to show if the order is paid in the screen and if not to have the option of PayPal button

## 23. orderhistory-profile-sidebar-searchBox

    create OrderHistoryScreen, profile, sidebar, searchBox
    create backend route to get user orders
    createa backend route to change user info
    get orders>show them in screen
    sideBar getting categories from backend

## 24. search screens

    create searchScreen
    create backend route for the query if search
    create protected and admin components that render children if meet condition
    create admin navbar

## 25. Admin Dashboard

    create admin dashboard
    create backend route and midleware to check if user is admin to get the data
    install raect-google-charts to show graphs on dashboard of sales
    create backend to get the data for the charts
