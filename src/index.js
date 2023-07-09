import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

/**
 * @author Manoj Raghavan
 * @version 0.0.1
 * 09-07-2023 - Creation
 * 
 * Snap Share App  :
 *   A React application that displays a random image in the center of the page 
 *   each time the page is refreshed. a share button under the image that allows 
 *   users to share the current image on Facebook, Twitter, and WhatsApp. The 
 *   image displayed on the page should be visible as a preview when the URL is 
 *   shared on these platforms.
 * 
 * This includes the following features:  
 *    1. Basic Authentication
 *    2. Persistence of user login on Refresh 
 *    3. Random Snaps on every refresh
 *    4. Sharing of snap as a preview on social media Facebook, Twitter, Whatsapp
 *    5. Snaps visible as a Preview on the social media sites
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);