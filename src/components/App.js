import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import '../styles/App.css';

/* App Component : 
   - Container for the usersList, current logged in Email, loggedIn Flag
   - Renders the routes for Home, Login and Signup
 */
function App() {

  // List of signed up users
  const [usersList, setUsersList] = useState(getInitialUserList()); // List of valid users

  // Current logged in Email
  const [currentEmail, setCurrentEmail ] = useState(localStorage.getItem("currentEmail")); // Current active user

  // Flag indicating whether a user is logged in 
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));

  // Function to update logged in flag
  function updateLoggedIn (status) {
    setLoggedIn(status);
    if ( status === false ) {
      setCurrentEmail('');

    }
  }

  // Function to update current logged user email
  function updateCurrentEmail (email) {
    setCurrentEmail(email);
  }

  // Function to update the Users List with a new signed up user
  function updateUserList (email, password) {
    setUsersList([...usersList, {username : email, password : password}]);
    localStorage.setItem("userList", JSON.stringify([...usersList, {username : email, password : password}]));
  }

  // Function to get the initial user list from local storage
  function getInitialUserList () {
    let initialUserList = JSON.parse(localStorage.getItem("userList"));
    console.log("initialUserList : ",initialUserList);

    if (initialUserList === null  ) {
      console.log("initialUserList is null");

      return [{username : "guest", password: "guest"}];
    } else {
      return initialUserList;
    }
  }
  
  return (
    <div className="App">

      <Router>
        <Navbar currentEmail={currentEmail}
                loggedIn={loggedIn}
                updateLoggedIn={updateLoggedIn}
        />
        <Routes>
          <Route path="/" 
                 element={<Home loggedIn={loggedIn} updateLoggedIn={updateLoggedIn} />}
          />
          <Route  path="/login" 
                  element={<Login usersList={usersList}
                                  loggedIn={loggedIn}
                                  updateLoggedIn={updateLoggedIn}
                                  updateCurrentEmail={updateCurrentEmail}
                           />
                  } 
          />
          <Route  path="/register" 
                  element={<SignUp usersList={usersList}
                                   setUsersList={setUsersList}
                                   updateUserList={updateUserList}
                           />
                  } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
