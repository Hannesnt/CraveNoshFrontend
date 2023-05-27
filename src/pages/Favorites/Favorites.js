import React from "react";
import "./Favorites.css";
import { Link } from "react-router-dom";
import getApiUrl from "../../hooks/baseurl";
function Favorites() {
  let favoritesArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    favoritesArray.push(JSON.parse(localStorage.getItem(key)));
  }
  return (
    <div className="mb-5">
      <div className="text-center mt-5">
        <h1>MINA RECEPT</h1>
      </div>
      <div className="row gx-0">
        <div className=" RecipeCardGroupDiv mt-5">
          {favoritesArray.map((data, index) => (
            <div key={`${data.id}-${index}`}>
              <Link to={`/recept/${data.id}`}>
                <img
                  src={`${getApiUrl()}${
                    data.attributes.thumbnail.data.attributes.url
                  }`}
                  alt={data.attributes.title}
                />
                <div className="TitleAndDescription mt-2">
                  <h5>
                    {data.attributes.title.substring(0, 55).toUpperCase()}
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="hrFooterFavorites"></hr>
    </div>
  );
}

export default Favorites;
