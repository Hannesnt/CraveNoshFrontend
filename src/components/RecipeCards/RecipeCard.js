import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";
import FetchFilteredRecipes from "../../hooks/FetchFilteredRecipes";
import Pagination from "../Pagination/Pagination";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from 'react-redux';
function RecipeCard({ filter, setCurrentPage, currentPage }) {
  const filtertest = useSelector((state) => state.filter)
  const { relatedLoading, relatedError, relatedData } =
    FetchFilteredRecipes(filtertest.filters);

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

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }

  return (
    <div className="row gx-0">
      <div className=" RecipeCardGroupDiv mt-5">
        {relatedData.data
          .slice((currentPage - 1) * 12, currentPage * 12)
          .map((data, index) => (
            <div key={`${data.id}-${index}`}>
              <Link to={`/recept/${data.id}`}>
                <img
                  src={`${data.attributes.thumbnail.data.attributes.url}`}
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
      <Pagination
        currentPage={currentPage}
        data={relatedData}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default RecipeCard;
