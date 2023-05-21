import React from "react";
import NewPost from "../../components/NewPost/NewPost";
import Categories from "../../components/Categories/Categories";
import RecipeKey from "../../components/Recipekey/RecipeKey";
import HomeRecipeCardGroup from "../../components/HomeRecipe/HomeRecipeCardGroup";
import useFetch from "../../hooks/UseFetch";
import { RotatingLines } from "react-loader-spinner";
function Home({ setFilter, filter, setNumberOfFilter, numberOfFilter }) {
  const { loading, error, data } = useFetch();
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
    <div>
      <NewPost data={data} />
      <Categories
        setFilter={setFilter}
        filter={filter}
        setNumberOfFilter={setNumberOfFilter}
        numberOfFilter={numberOfFilter}
      />
      <RecipeKey />
      <HomeRecipeCardGroup data={data} />
    </div>
  );
}

export default Home;
