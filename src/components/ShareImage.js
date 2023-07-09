import {useState} from 'react';
import {FacebookShareButton,TwitterShareButton,WhatsappShareButton } from 'react-share';
import styles from '../styles/shareImage.module.css'
import {Helmet} from 'react-helmet';
import facebook from '../images/facebook.jfif'
import twitter from '../images/twitter.png'
import whatsapp from '../images/whatsapp.jfif'

const ShareImage =( (props) => {
    const {randomSnapURL} = props;
    const [share, setShare] = useState(false);
    const quote = "Sending your a wonderful image...!"

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
                    <Helmet>                       
                        <meta property="og:type" content="image"/>
                        <meta property="og:title" content="Check out this random image!" />
                        <meta property="og:image" content={randomSnapURL} />
                        <meta property="og:description" content="This is a random image description." />
                        <meta property="og:url" content="https://picsum.photos/" />

                        <meta property="twitter:type" content="image"/>
                        <meta property="twitter:title" content="Check out this random image!" />
                        <meta property="twitter:image" content={randomSnapURL} />
                        <meta property="twitter:description" content="This is a random image description." />
                        <meta property="twitter:url" content="https://picsum.photos/" />                        
                    </Helmet>

                        <div className={styles.option}> 
                            <FacebookShareButton url={randomSnapURL} >
                                <img src={facebook} className={styles.image}/>
                            </FacebookShareButton>
                        </div>
                        <div className={styles.option}> 
                            <TwitterShareButton url={randomSnapURL} >
                                <img src={twitter} className={styles.image}/>
                            </TwitterShareButton>
                        </div>

                        <div className={styles.option}> 
                            <WhatsappShareButton url={randomSnapURL} >
                                <img src={whatsapp} className={styles.image}/>
                            </WhatsappShareButton>
                        </div>

                </div>
            }
        </div>
    )
    


});

export default ShareImage;