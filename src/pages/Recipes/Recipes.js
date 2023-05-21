import React, { useState } from "react";
import FilterBtn from "../../components/FilterContent/FilterBtn";
import RecipeCard from "../../components/RecipeCards/RecipeCard";
function Recept({ filter, setFilter, setNumberOfFilter, numberOfFilter }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <FilterBtn
        filter={filter}
        setFilter={setFilter}
        setCurrentPage={setCurrentPage}
        numberOfFilter={numberOfFilter}
        setNumberOfFilter={setNumberOfFilter}
      />
      <RecipeCard
        filter={filter}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Recept;
