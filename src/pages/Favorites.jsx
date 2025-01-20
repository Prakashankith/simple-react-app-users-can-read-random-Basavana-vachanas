import React from "react";

const Favorites = ({ favorites }) => (
  <div className="favorites">
    <h1>Favorites</h1>
    <ul>
      {favorites.length ? (
        favorites.map((vachana, index) => <li key={index}>{vachana}</li>)
      ) : (
        <p>No favorites added yet.</p>
      )}
    </ul>
  </div>
);

export default Favorites;
