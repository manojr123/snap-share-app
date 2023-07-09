import styles from '../styles/randomImage.module.css'

const RandomImage =( (props) => {
    const {randomSnapURL} = props;


    return (
        <div >
                <img src={randomSnapURL} alt="randomImage" className={styles.image}/>
        </div>
    )
    


});

export default RandomImage;