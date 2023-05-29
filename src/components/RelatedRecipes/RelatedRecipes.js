import React from "react";
import { Link } from "react-router-dom";
import "./RelatedRecipes.css";
function RelatedRecipes({ data }) {
  let counter = 0;
  if (data.data[0] != null) {
    return (
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly relatedContainer">
        <div className="row gx-0 p-4">
          <div className="col-12 d-flex mb-3 flex-column flex-lg-row">
            <div className="col-12 col-lg-3 d-flex text-center align-items-lg-center justify-content-center my-3 mb-lg-0">
              <h4>LIKNANDE RECEPT:</h4>
            </div>
            <div className="col-12 col-lg-9 d-flex justify-content-center justify-content-lg-start flex-column flex-md-row">
              {data.data.map((recipe, index) => {
                if (counter < 3) {
                  counter++;
                  return (
                    <div
                      className="col-12  col-md-3 my-4 mx-md-4 d-flex justify-content-center"
                      key={`${recipe.id}-${index}`}
                    >
                      <div className="col-8 col-sm-6 col-md-12">
                        <Link to={`/recept/${recipe.id}`}>
                          <img
                            src={`${recipe.attributes.thumbnail.data.attributes.url}`}
                            alt={recipe.attributes.title}
                            className="relatedRecipeImg"
                          />
                          <div className="TitleAndDescription mt-2">
                            <h5>
                              {recipe.attributes.title
                                .substring(0, 55)
                                .toUpperCase()}
                            </h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default RelatedRecipes;
