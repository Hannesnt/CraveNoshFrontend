import React, { useState } from "react";
import SearchFetch from "../../hooks/SearchFetch";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import { RotatingLines } from "react-loader-spinner";
function SearchPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query");
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = SearchFetch(query);

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

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        {query === "" ? (
          <h4>Sök efter recept</h4>
        ) : (
          <h4>Sökresultat för {query}</h4>
        )}
      </div>

      <div className="row gx-0">
        <div className=" RecipeCardGroupDiv mt-5">
          {data.data
            .slice((currentPage - 1) * 12, currentPage * 12)
            .map((data, index) => (
              <div key={`${data.id}-${index}`}>
                <Link to={`/Recept/${data.id}`}>
                  <img
                    src={`http://localhost:1337${data.attributes.thumbnail.data.attributes.url}`}
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
          data={data}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default SearchPage;
