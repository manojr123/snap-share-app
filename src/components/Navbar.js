import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom';

/* Navbar Component : Renders the Navbar */
function Navbar (props) {

    const {currentEmail, updateLoggedIn} = props;
    function handleLogout() {
        localStorage.setItem("loggedIn", "false" );
        updateLoggedIn(false);
      }
    
    return (

        <div className={styles.navbar}>
            <div className={styles.title}><strong>Snap Share</strong></div>
            <div>
                <div>{currentEmail}</div>
                <button className={styles.logout} onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )

}

export default Navbar;