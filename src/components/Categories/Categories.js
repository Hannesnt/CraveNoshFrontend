import React from "react";
import "./Categories.css";
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from "../../redux/filter/filterSlice";
import { Link } from "react-router-dom";
function Categories() {
  const filtertest = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  return (
    <>
      <div className="categoryContainer container d-flex ">
        <div className="categoryRow row d-flex col-12">
          <Link
            to={`/recept`}
            onClick={() => dispatch(addFilter(9))}
            className="col-3 col-md-3 col-xl-1 my-2 my-md-5 category"
          >
            <div className="">
              <span>BAKVERK</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => dispatch(addFilter(3))}
            className="col-3 col-md-3 col-xl-1 my-2 my-md-5 category"
          >
            <div className="">
              <span>PASTA</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => dispatch(addFilter(4))}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5"
          >
            <div>
              <span>FÅGEL</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => dispatch(addFilter(5))}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5"
          >
            <div>
              <span>KÖTT</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => dispatch(addFilter(1))}
            className="category col-3 col-md-3 col-xl-1 my-2 my-md-5"
          >
            <div>
              <span>KYCKLING</span>
            </div>
          </Link>
          <Link
            to={`/recept`}
            onClick={() => dispatch(addFilter(6))}
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
