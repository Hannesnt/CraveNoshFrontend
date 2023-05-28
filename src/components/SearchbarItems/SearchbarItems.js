import React from "react";
import { Link } from "react-router-dom";
import "./SearchBarItems.css";
import SearchFetch from "../../hooks/SearchFetch";
import { RotatingLines } from "react-loader-spinner";
function SearchbarItems({ searchText, setSearchText }) {
  const { loading, error, data } = SearchFetch();
  if (loading) {
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
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="searchContainer col-lg-12">
      <div className="searchDiv">
        {searchText.toLowerCase() !== "" &&
          data.data
            .filter((item) => {
              return item.attributes.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
            })
            .map((item) => {
              return (
                <div className="searchResults" key={item.id}>
                  <Link to={`/recept/${item.id}`}>
                    <p className="p-2" onClick={() => setSearchText("")}>
                      {item.attributes.title}
                    </p>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default SearchbarItems;
