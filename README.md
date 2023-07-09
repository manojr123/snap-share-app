# SnapShare

## Requirement
   - Create a simple React application that displays a random image in the center of the page each time the page is refreshed. 
   - Include a share button under the image that allows users to share the current image on Facebook, Twitter, and WhatsApp. 
   - The image displayed on the page should be visible as a preview when the URL is shared on these platforms.

## Description
   - **Login and Signup** functionality
   - Basic Authentication
   - Presistence of Login Data over page referesh using LocalStorage
   - **Image Display**:
   - The application renders a new, random image in the center of the page 
     each time the page is refreshed. 
   - Uses https://picsum.photos/ to fetch random images.
   - **Share Button**:
   - Share button provided beneath the image. 
   - When a user clicks on this button, options provided to share the page on
     Facebook, Twitter, and WhatsApp.
   - **Share Preview**: 
   - Ensures that the current image displayed on the page is visible as a preview when
   - the URL is shared on the mentioned social media platforms. 
   - Appropriate meta tags are obtained from a obtained from a backend hosted node server 
   - Handles errors and success scenarios while fetching data

# Folder Structure
  - **'components'** folder - Contains all the React Components
      - Key Components : 
        - **App**  -
            - Container for the usersList, current logged in Email, loggedIn Flag
            - Renders the routes for Home, Login and Signup
         - **Navbar** - Shows the current logged in user, Logout option
        - **Random Image** - Renders the random image fetched from the site   
        - **Share Image** - Handle the random image share with social media sites  
  - **pages**
    - **Home Component** 
       - State Container for the random Snap URL and the random Snap Preview URL
       - Random Snap is fetched from https://picsum.photos
       - Random Snap Preview URL is fetched from a backend server
       - Backend server hosted @https://snapshare-backend-node.onrender.com
       - Backend code in github @https://github.com/manojr123/snap-share-backend
       - Renders components RandomImage and ShareImage   
    - **Login and SignUp** - Handles Login and Sign up
  - **'styles'** folder - Contains all the CSS styles for all the components

## Screenshot (SnapShare App)

![screenshot](https://drive.google.com/uc?export=view&id=1ngsDXiCo6UodvkJsHpkmNSXFD0Z3YWXq)

## Screenshot (Social Media Sites Preview)

![screenshot](https://drive.google.com/uc?export=view&id=11jZEfwc9XCYffrRoUQXwyczhfZDGrNHi)


# Instructions to use the SnapShare app
  - git clone https://github.com/manojr123/snap-share-app
  - npm install
  - `npm start` . Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - **Dummy login** : guest@gmail.com Password : guest
  - On every refresh a new random image is shown
  - Share Button when clicked shows the options to share on social Media sites Facebook, Twitter, Whatsapp
  - Preview of the image is shown on all the social sites


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


