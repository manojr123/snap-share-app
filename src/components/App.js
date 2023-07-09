import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import '../styles/App.css';

function App() {
  const [usersList, setUsersList] = useState([{username : "guest", password: "guest"}]); // List of valid users
  const [currentEmail, setCurrentEmail ] = useState(''); // Current active user
  const [currentPasswd, setCurrentPasswd] = useState(''); // Current active passwd
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));


  function updateLoggedIn (status) {
    setLoggedIn(status);
    if ( status === false ) {
      setCurrentEmail('');

    }
  }
  function updateCurrentEmail (email) {
    setCurrentEmail(email);
  }


  return (
    <div className="App">

      <Router>
        <Navbar currentEmail={currentEmail} updateLoggedIn={updateLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} updateLoggedIn={updateLoggedIn} />}/>
          <Route  path="/login" element={<Login usersList={usersList} loggedIn={loggedIn} updateLoggedIn={updateLoggedIn} updateCurrentEmail={updateCurrentEmail}/>} />
          <Route  path="/register" element={<SignUp setUsersList={setUsersList}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
