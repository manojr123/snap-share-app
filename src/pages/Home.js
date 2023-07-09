import {useState, useEffect} from 'react';
import RandomImage from '../components/RandomImage';
import ShareImage from '../components/ShareImage';
import { useNavigate } from "react-router-dom";

/* Home Component : 
   - State Container for the random Snap URL and the random Snap Preview URL
   - Random Snap is fetched from https://picsum.photos
   - Random Snap Preview URL is fetched from a backend server
   - Backend server hosted @https://snapshare-backend-node.onrender.com
   - Renders components RandomImage and ShareImage
 */
function Home(props) {

  const {loggedIn} = props;

  const [randomSnapURL, setRandomSnapURL] = useState(null);
  const [randomSnapMetaURL, setRandomSnapMetaURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log("Home : LoggedIn before check", loggedIn);

  if (!loggedIn) {
    navigate("/login");
  }

  console.log("Home : LoggedIn after check", loggedIn);

  // useEffect to handle side effect of fetching the random snap and meta data
  useEffect(()=> {

    setLoading(true);
    // Fetch the random snap
    let image = fetch('https://picsum.photos/400');

    image
    .then ( response => {
      console.log(response);
      console.log(response.url);

      if (response.ok) {
        setRandomSnapURL(response.url);
        setRandomSnapMetaURL(`https://snapshare-backend-node.onrender.com/?url=${response.url}`);

        const data = new URLSearchParams();
        data.append('url',response.url);
        
        // Fetch the random snap meta data from the backend node server
        let responseMeta = fetch(`http://localhost:8080/?url=${response.url}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        responseMeta
        .then ( response => {
          console.log("response from backend", response);
          console.log("response from backend : body", response.body);
          setError(null);
        })
        .catch(error => {
          console.log("Error in catch from backend: " , error);
        })  
        setError(null);
      } else {
        console.log("throwing new error : status",response.status);
        throw new Error(`Error Fetching data : ${response.status}`);
      }      
    })
    .catch(error => {
      console.log("Error in catch: " , error);
      setRandomSnapURL(null);
    })
    setLoading(false);

  },[])


  return (
    <div className="App">
      {loggedIn &&  
        <div>
            {loading && <h1> Loading....</h1> }
            {error && <h1> Error : {error}</h1> }
            {randomSnapURL && <RandomImage randomSnapURL={randomSnapURL} /> }
            {randomSnapURL && <ShareImage randomSnapMetaURL={randomSnapMetaURL}/> } 
            <br/><br/>
        </div>
      }
    </div>
  );
}

export default Home;
