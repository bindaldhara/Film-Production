import React, { useState, useEffect } from "react";

function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
      const data = await response.json();

      setFilms(data);
    }
    getFilms();
  }, []);

  return (
    <div>
      <div className="page-container">
        <div className="list-container">
          {films
            .map((film) => (
              <div className="list-item" key={film.title}>
                <h3>{film.title}</h3>
                <div className="item-details">
                  <p>Director: {film.director}</p>
                  <p>Producer: {film.producer}</p>
                  <p>Release date: {film.release_date}</p>
                  <p>Rotten Tomato Score: {film.rt_score}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Films;