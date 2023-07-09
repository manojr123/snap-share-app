import styles from '../styles/randomImage.module.css'

/* RandomImage Component :  
   - Renders the random image fetched from the site   
*/
const RandomImage =( (props) => {

    // Get the props
    const {randomSnapURL} = props;

    return (
        <div >
                <img src={randomSnapURL} alt="randomImage" className={styles.image}/>
        </div>
    ) 

});

export default RandomImage;