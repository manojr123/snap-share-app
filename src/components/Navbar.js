import styles from '../styles/navbar.module.css'

/* Navbar Component : Renders the Navbar 
   - Shows the current logged in user
   - Displays logout option
*/
function Navbar (props) {

    const {currentEmail, loggedIn, updateLoggedIn} = props;

    // Function to handle logout
    function handleLogout() {
        localStorage.setItem("loggedIn", "false" );
        updateLoggedIn(false);
        
      }

    return (

        <div className={styles.navbar}>
            <div className={styles.title}><strong>Snap Share</strong></div>
            <div className={styles.details}>
                <div>{currentEmail}</div>
                {loggedIn && <button className={styles.logout} onClick={handleLogout}>Logout</button>}

            </div>
        </div>
    )

}

export default Navbar;