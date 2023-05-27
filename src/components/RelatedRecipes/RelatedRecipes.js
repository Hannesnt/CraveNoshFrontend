import React from "react";
import FetchFilteredRecipes from "../../hooks/FetchFilteredRecipes";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import "./RelatedRecipes.css";
import getApiUrl from "../../hooks/baseurl";
function RelatedRecipes(props) {
  const { relatedLoading, relatedError, relatedData } = FetchFilteredRecipes(
    props.tagId
  );

  let counter = 0;
  if (relatedLoading)
    return (
      <div className="d-flex justify-content-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="26"
          visible={true}
        />
      </div>
    );
  if (relatedError) return <p>Error :(</p>;

  return (
    <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly relatedContainer">
      {relatedData.data.map((data, index) => {
        if (data.id != props.id && counter < 3) {
          counter++;
          return (
            <div
              className="col-12  col-md-3 my-5 d-flex justify-content-center"
              key={`${data.id}-${index}`}
            >
              <div className="col-8 col-sm-6 col-md-12">
                <Link to={`/recept/${data.id}`}>
                  <img
                    src={`${getApiUrl()}${
                      data.attributes.thumbnail.data.attributes.url
                    }`}
                    alt={data.attributes.title}
                    className="relatedRecipeImg"
                  />
                  <div className="TitleAndDescription mt-2">
                    <h5>
                      {data.attributes.title.substring(0, 55).toUpperCase()}
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
      {counter === 0 ? (
        <div className="p-5">
          <h4>RECEPT I SAMMA KATEGORI KOMMER SNART</h4>
        </div>
      ) : null}
    </div>
  );
}

export default RelatedRecipes;
