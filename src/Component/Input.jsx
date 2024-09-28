import React, { useState } from "react";
import Cards from "./Cards";

const Input = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState();

  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    setLoading(true);

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=da64d5b27581498b800130057242809&q=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("Failed to fetch weather data");
          setResult();
        } else {
          setResult(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="navbar">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter City Name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <div className="loading">
          <p>Loading data...</p>
        </div>
      ) : (
        result && <Cards data={result} />
      )}
    </div>
  );
};

export default Input;
