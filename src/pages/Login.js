import { useState } from 'react';
import styles from '../styles/login.module.css';
import { useNavigate, Link } from 'react-router-dom';

/* Login Component : 
  - Validate user login
  - Set Current User state
*/
function Login (props) {

    const {loggedIn,usersList, updateLoggedIn, updateCurrentEmail} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);
    const navigate = useNavigate();
    console.log("Login : ...");
    console.log("loggedIn ...",loggedIn);
    console.log("usersList ...",usersList);

    if (loggedIn) {
        console.log("Already logged in ...");
        navigate("/");
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoggingIn(true);
        console.log('Login ...handleSubmit');
        console.log('userList ...', usersList);

        if (!email || !password) {
          return;
        }
        if ( (email === "guest@gmail.com" ) && (password === "guest" ) ){
            updateLoggedIn(true);
            updateCurrentEmail("guest@gmail.com");
            localStorage.setItem("loggedIn", "true" );
            localStorage.setItem("currentEmail", "guest@gmail.com" );
            navigate("/");
        }
        
        for (let i=0; i< usersList.length; i++) {
          if ( usersList[i].username === email ) {
            if (usersList[i].password === password) {
              updateLoggedIn(true);
              updateCurrentEmail(email);
              localStorage.setItem("loggedIn", "true" );
              localStorage.setItem("currentEmail",email );
              navigate("/");
            }
          }
        }

        setLoggingIn(false);
      };
    
    return (
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Log In</span>
  
        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        <div className={styles.field}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <div className={styles.field}>
          <button disabled={loggingIn}>
            {loggingIn ? 'Logging in...' : 'Log In'}
          </button>
        </div><br/>
        <Link to="/register"> Sign-up</Link>
      </form>    
  

    )

}

export default Login;