import React, { useState, useCallback } from "react";
import landscape from "../../assets/image-1.jpg";
import "./autocomplete.scss";
import { debounce } from "lodash";

const ENDPOINT = "https://your.service.com/api/assets";

function Autocomplete({ placeholder }) {
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filteredLives, setFilteredLives] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const verify = useCallback(
    debounce((wordEntered) => {
      fetch(`${ENDPOINT}?search=${wordEntered}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(`processing ${wordEntered}`);
          const newFilter = data.filter((value) => {
            return value.title
              .toLowerCase()
              .includes(wordEntered.toLowerCase());
          });

          let photosArray = [];
          let livesArray = [];

          if (wordEntered === "") {
            setFilteredPhotos([]);
            setFilteredLives([]);
          } else {
            newFilter.map((value) => {
              if (value.type === "photo") {
                photosArray.push(value);
              }
              if (value.type === "live") {
                livesArray.push(value);
              }
              return true;
            });
          }
          setFilteredPhotos(photosArray);
          setFilteredLives(livesArray);
        })
        .catch((error) => console.log(error));
    }, 300),
    []
  );
  const handleFilter = (event) => {
    setWordEntered(event.target.value);
    verify(event.target.value);
  };

  return (
    <div className="search">
      <p>I am a search field</p>
      <p> Do you want to try me? </p>
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredPhotos.length !== 0 && (
        <div>
          <p className="type"> Videos </p>
          {filteredPhotos.map((value, key) => {
            return (
              <div key={value.id} className="resultRow">
                <img src={landscape} alt="landscape" />
                <p>{value.title} </p>
              </div>
            );
          })}
        </div>
      )}
      {filteredLives.length !== 0 && (
        <div>
          <p className="type"> Live events </p>
          {filteredLives.map((value, key) => {
            return (
              <div key={value.id} className="resultRow">
                <img src={landscape} alt="landscape" />
                <p>{value.title} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
