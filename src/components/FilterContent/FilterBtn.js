import React, { useState } from "react";
import "./FilterBtn.css";
import FilterBtnFetch from "../../hooks/FilterBtnFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { RotatingLines } from "react-loader-spinner";
function FilterBtn({
  filter,
  setFilter,
  setCurrentPage,
  numberOfFilter,
  setNumberOfFilter,
}) {
  const [toggle, setToggle] = useState(false);

  const ToggleBtnFilter = (filterName) => {
    if (filter.includes(filterName)) {
      setFilter(filter.filter((x) => x !== filterName));
      setNumberOfFilter(numberOfFilter - 1);
    } else {
      setFilter([...filter, filterName]);
      setNumberOfFilter(numberOfFilter + 1);
      setCurrentPage(1);
    }
  };

  const FilterBtnToggle = () => {
    let BtnsDiv = document.getElementById("filterBtn");
    if (toggle) {
      BtnsDiv.style.display = "none";
      setToggle(false);
    } else {
      BtnsDiv.style.display = "flex";
      setToggle(true);
    }
  };
  const { loading, error, data } = FilterBtnFetch();

  if (loading)
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
  if (error) return <p>Error :(</p>;

  return (
    <div className="filterBtnDiv">
      <div className="col-md-10 col-lg-10 selectFilterDiv">
        <button className="mx-4 filterBtnMain my-3" onClick={FilterBtnToggle}>
          <FontAwesomeIcon
            icon={faFilter}
            style={{ color: "#d3c0dd", marginRight: "5px" }}
          />{" "}
          Filter
          {numberOfFilter > 0 ? (
            <div className="filterNumber">{numberOfFilter}</div>
          ) : (
            <></>
          )}
        </button>
      </div>
      <div className="col-11 col-md-10 col-lg-10 row gx-0" id="filterBtn">
        {data.data.map((btn) => {
          if (filter.includes(btn.id)) {
            return (
              <button
                key={btn.id}
                className="col-5 col-md-2 col-lg-2 my-3 filterBtn"
                id={btn.id}
                onClick={() => ToggleBtnFilter(btn.id)}
                style={{
                  backgroundColor: "rgb(201, 196, 190)",
                  color: "white",
                  border: "1px solid #d3c0dd",
                }}
              >
                {btn.attributes.name}
              </button>
            );
          } else {
            return (
              <button
                key={btn.id}
                className="col-5 col-sm-3 col-md-2 col-lg-2 my-3 filterBtn"
                id={btn.id}
                onClick={() => ToggleBtnFilter(btn.id)}
                style={{ backgroundColor: "white" }}
              >
                {btn.attributes.name}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FilterBtn;
