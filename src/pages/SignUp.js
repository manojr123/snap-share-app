import { useState } from 'react';
import styles from '../styles/login.module.css';
import { useNavigate, Link } from 'react-router-dom';

/* Signup Component : 
  - Handle Sign-up
*/
function SignUp (props) {

    const {setUsersList} = props;


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signingUp, setSigningUp] = useState('');
    const navigate = useNavigate();

    function handleFormSubmit(e) {
      e.preventDefault();
      setSigningUp(true);
      console.log('Signup ...handleSubmit');

      if (password !== confirmPassword) {
        return;
      }
      setSigningUp(false);

    }

    return (
        <form className={styles.signupForm} onSubmit={handleFormSubmit}>
        <span className={styles.loginSignupHeader}> Signup</span>
        <div className={styles.field}>
          <input
            placeholder="Name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <div className={styles.field}>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <div className={styles.field}>
          <input
            placeholder="Confirm password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <input
            placeholder="Password"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <button disabled={signingUp}>
            {signingUp ? 'Signing up...' : 'Signup'}
          </button>
        </div><br/>
        <Link to="/Login"> Login</Link>

      </form>  

    )

}

export default SignUp;