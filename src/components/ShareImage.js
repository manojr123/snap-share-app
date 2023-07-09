import {useState} from 'react';
import {FacebookShareButton,TwitterShareButton,WhatsappShareButton } from 'react-share';
import styles from '../styles/shareImage.module.css'
import facebook from '../images/facebook.jfif'
import twitter from '../images/twitter.png'
import whatsapp from '../images/whatsapp.jfif'

/* ShareImage Component :  
   - Handle the random image share with social media sites
   - Sites supported Facebook, Twitter, Whatsapp   
*/
const ShareImage =( (props) => {
    const {randomSnapMetaURL} = props;
    const [share, setShare] = useState(false);

    // Toggle the share button display
    function handleShare() {
        setShare(share => !share);
    }

    return (
        <div className={styles.sharePanel}> 
            <div  >
                <button className={styles.shareBtn} onClick={handleShare} > 
                    <strong>Share</strong>
                </button>
            </div>
            { share && 
                <div className={styles.options}>

                        <div className={styles.option}> 
                            <FacebookShareButton url={randomSnapMetaURL} >
                                <img src={facebook} className={styles.image} alt="randomImg"/>
                            </FacebookShareButton>
                        </div>
                        <div className={styles.option}> 
                            <TwitterShareButton url={randomSnapMetaURL} >
                                <img src={twitter} className={styles.image} alt="randomImg"/>
                            </TwitterShareButton>
                        </div>

                        <div className={styles.option}> 
                            <WhatsappShareButton url={randomSnapMetaURL} >
                                <img src={whatsapp} className={styles.image} alt="randomImg"/>
                            </WhatsappShareButton>
                        </div>

                </div>
            }
        </div>
    )
    


});

export default ShareImage;