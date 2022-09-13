import CardResident from "./components/CardResident";
import LocationInfo from "./components/LocationInfo";
import "./styles/Search.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState();

  useEffect(() => {
    let numberLocation;
    if (searchInput === "") {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
    } else {
      numberLocation = searchInput;
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((error) => console.log(error));
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.search.value);
  };

  return (
    <div className="App">
      <h1>Rick and Morty's API</h1>
      <div className="banner">
        <img
          src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/QQWVSJ6MDVGKRELX455KIABEEY.gif"
          alt=""
        />
      </div>

      <form className="seach_bar" onSubmit={handleSubmit}>
        <input
          className="input"
          id="search"
          type="text"
          placeholder="Number 1-126"
        />
        <button className="noselect">
          <span>Search</span>
        </button>
      </form>
      <LocationInfo location={location} />
      <div className="card_container">
        {location?.residents.map((url) => (
          <CardResident key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
