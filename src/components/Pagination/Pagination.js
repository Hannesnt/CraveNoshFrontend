import React from "react";
import "./Pagination.css";
function Pagination({ currentPage, data, handlePageChange }) {
  const pageSize = 12;

  const pageCount = Math.ceil(data.data.length / pageSize);
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pageLinkDiv mb-5">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={
            pageNumber === currentPage
              ? "active pageLinksBtn btn"
              : " pageLinksBtn btn"
          }
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
