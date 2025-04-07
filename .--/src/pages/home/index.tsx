import axios from"axios";
import { useState } from "react";
import "./styles.css"

const Home = () => {
  const [joke, setJoke] = useState<string>();

  const randomJoke = () => {
    axios.get("https://api.chucknorris.io/jokes/random")
    .then((response) => {setJoke(response.data.value)})
  }

  console.log(joke)

  return (
    <div className="container">
      <div className="image">
        {!joke ? <img src="./angry.jpg" /> : <img src="./boobies.gif" />}
      </div>
      <div className="joke">
        <h2>{joke}</h2>
        <button onClick={randomJoke}  className="submit">{!joke ? "Click here for a not funny joke" : " Click here for a outher not funny joke"}</button>
    </div>
    </div>
  )
}

export default Home;