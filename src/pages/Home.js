import {useState, useEffect} from 'react';
import RandomImage from '../components/RandomImage';
import ShareImage from '../components/ShareImage';
import { useNavigate } from "react-router-dom";
import styles from '../styles/home.module.css';

function Home(props) {

  const {loggedIn} = props;

  const [randomSnapURL, setRandomSnapURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log("Home : LoggedIn before check", loggedIn);

  if (!loggedIn) {
    navigate("/login");
  }

  console.log("Home : LoggedIn after check", loggedIn);


  useEffect(()=> {

    setLoading(true);
    let image = fetch('https://picsum.photos/400');

    image
    .then ( response => {
      console.log(response);
      console.log(response.url);

      if (response.ok) {
        setRandomSnapURL(response.url);
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
            {randomSnapURL && <RandomImage randomSnapURL={randomSnapURL}/> }
            {randomSnapURL && <ShareImage randomSnapURL={randomSnapURL}/> } 
            <br/><br/>
        </div>
      }
    </div>
  );
}

export default Home;
