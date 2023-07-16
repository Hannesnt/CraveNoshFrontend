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
            className="col-3 col-md-3 col-xl-1 my-2 my-md-5 category"
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
            className="col-3 col-md-3 col-xl-1 my-2 my-md-5 category"
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
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5"
          >
            <div>
              <span>FÅGEL</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([10]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5"
          >
            <div>
              <span>KÖTT</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([16]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5"
          >
            <div>
              <span>SMÅRÄTTER</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => {
              setFilter([20]);
              setNumberOfFilter(numberOfFilter + 1);
            }}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5"
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
