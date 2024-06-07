# The Shoe Spot

Welcome to The Shoe Spot e-commerce platform. This project aims to provide a seamless online shopping experience for users, with a focus on performance, security, and scalability. It is designed to handle a large inventory of products and provide an intuitive interface for both customers and administrators.
## Features 
 - User authentication and authorization
 - Product catalog management
 - Shopping cart functionality
 - Order processing and management
 - Payment gateway integration
 - Login/sign up with email and password or with Google, as well as logout features that clear the cart when the user logs out
 - A stripe payment gateway successfully integrated that allows the user to make test payments.
 - Displaying the different shoe products by getting it from our Firebase database
 - User-friendly and responsive that makes it easy for users to navigate through the website from one page to the next on any screen size.
 - User can add/remove items from the cart.
 - Feature that makes that users must be logged in before they can proceed to checkout.
 - After success payment, there will appear a message saying success and redirect user to homepage.
 - Feature that does the calculations of the complete cart, no matter how much you add/remove.

## Technologies Used
 Frontend: React js, CSS, Bootstrap
 Backend: Node.js
 Database: firebase
 Authentication: JWT (JSON Web Tokens)
 Payment Gateway: Stripe
 

## Installation

You can install Node.js, React, Bootstrap, Firebase, Font Awesome, and Toastify using npm (Node Package Manager) with the following commands:

Node.js: Node.js is required to run npm. You can download and install it from the official website: Node.js Download

* React: npm install react
* To create the React App: npm install -g create-react-app
* to see you React App in the browser: npm start
* Bootstrap: npm install bootstrap
* Firebase: npm install firebase
* Font Awesome: npm install @fortawesome/fontawesome-free
* Toastify: npm install react-toastify
After running these commands in your terminal, npm will download and install the specified packages into your project's node_modules directory. You can then import and use these libraries in your React project. Remember to include appropriate import statements in your code to utilize the functionalities provided by each package.

## Usage

1. User Registration and Login
    - Navigate to the registration page and create a new account.
    - Log in using your credentials.

2. Browsing Products
    - Browse the product catalog from the homepage or categories.

3. Adding Products to Cart
    - Select a product and click "Add to Cart".

4. Checkout
    - Go to the cart and proceed to checkout.
    - Enter your shipping details and payment information.
    - Complete the order.

## Configuration
- `JWT_SECRET`: The secret key used for signing JWT tokens.
- `STRIPE_SECRET_KEY`: Your Stripe secret key for processing payments.
- `PORT`: The port on which the server runs (default is 3000).

## Testing
manual testing is done with the command
    'npm start'

## Developers(Team)
- Name: Bekee Ogonna Goddey 
  Email: Bekeeogonna@yahoo.com
- Name: Lisa Powell-kuyk
  Email: lisapowell46@gmail.com
- Name: Marley Enogheghase
  Email: marleyenogheghase@gmail.com