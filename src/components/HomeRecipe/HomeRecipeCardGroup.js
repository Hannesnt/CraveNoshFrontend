import React from "react";
import { Link } from "react-router-dom";
import "./HomeRecipeCard.css";

function HomeRecipeCardGroup(data) {
  return (
    <div>
      <div className="row gx-0">
        <div className=" RecipeCardGroupDiv mt-5">
          {data.data.data.map((recipe, index) => (
            <div key={`${recipe.id}-${index}`}>
              <Link to={`/recept/${recipe.id}`}>
                <img
                  src={`http://localhost:1337${recipe.attributes.thumbnail.data.attributes.url}`}
                  alt={recipe.attributes.title}
                />
                <div className="TitleAndDescription mt-2">
                  <h5>
                    {recipe.attributes.title.substring(0, 55).toUpperCase()}
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="hrHomeFooter"></hr>
    </div>
  );
}

export default HomeRecipeCardGroup;
