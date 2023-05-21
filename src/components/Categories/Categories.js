import React from "react";
import "./Categories.css";

import { Link } from "react-router-dom";
function Categories({ setFilter, setNumberOfFilter, numberOfFilter }) {
  return (
    <>
      <div className="categoryContainer container d-flex ">
        <div className="categoryRow row d-flex col-12">
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([4]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="col-3 col-md-3 col-xl-1 my-2 my-md-5 category ChickenCategory"
          >
            <div className="">
              <span>BAKVERK</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([5]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="col-3 col-md-3 col-xl-1 my-2 my-md-5 category   MeatCategory"
          >
            <div className="">
              <span>FISK / SKALDJUR</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([6]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5 VegetarianCategory"
          >
            <div>
              <span>FÅGEL</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([7]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5 AsianCategory"
          >
            <div>
              <span>KÖTT</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([8]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5 VeganCategory"
          >
            <div>
              <span>VEGANSKT</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([9]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5 BakingCategory"
          >
            <div>
              <span>VEGETARISKT</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
