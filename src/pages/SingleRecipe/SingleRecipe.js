import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeKey from "../../components/Recipekey/RecipeKey";
import FetchSingleRecipe from "../../hooks/FetchSingleRecipe";
import RecipeKeyIcon from "../../components/Recipekey/RecipeKeyIcon";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./SingleRecipe.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as BookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { RotatingLines } from "react-loader-spinner";
import RelatedRecipes from "../../components/RelatedRecipes/RelatedRecipes";
function SingleRecipe({ saveToLocalStorage }) {
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);
  const [antalServings, setAntalServings] = useState(4);

  const favoriteChecker = useCallback(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === id) {
        setClicked(true);
      }
    }
  }, [id, setClicked]);
  useEffect(() => {
    favoriteChecker();
  }, [favoriteChecker]);

  function AddServings() {
    if (antalServings < 20) {
      setAntalServings(antalServings + 2);
    }
  }
  function SubServings() {
    if (antalServings > 2) {
      setAntalServings(antalServings - 2);
    }
  }

  const { loading, error, data } = FetchSingleRecipe(id);
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
  const favoritesClick = () => {
    if (!clicked) {
      setClicked(!clicked);
      saveToLocalStorage(id, data.data[0]);
    } else {
      setClicked(!clicked);
      localStorage.removeItem(id);
    }
  };

  const text = data.data[0].attributes.ingrediens;
  const regex = /^(\d+(?:\.\d+)?)\s+/;
  const lines = text.split("\n");
  const ingredients = lines.map((line) => {
    const match = line.match(regex);
    const number = match ? parseFloat(match[1]) : null;
    const text = match ? line.slice(match[0].length) : line;
    return {
      line,
      number,
      text,
    };
  });
  return (
    <div>
      <div className="singleRecipeMain">
        <div className="container">
          <div className="row gx-0">
            <div className="col-12 d-flex justify-content-center justify-content-md-start flex-column flex-md-row">
              <div className="col-12 col-md-6 col-lg-5 RecipeCardShow d-flex align-items-center">
                <div className="col-8 col-sm-7 col-md-10  d-flex justify-content-center flex-column">
                  <div className="my-5 singleRecipeTitleMobile">
                    <h1>{data.data[0].attributes.title.toUpperCase()}</h1>
                  </div>
                  <Carousel>
                    {data.data[0].attributes.carousel.data.map(
                      (carouselImage) => {
                        return (
                          <Carousel.Item key={carouselImage.id}>
                            <img
                              className="d-block carouselImage"
                              src={`${carouselImage.attributes.url}`}
                              alt={carouselImage.title}
                            />
                          </Carousel.Item>
                        );
                      }
                    )}
                  </Carousel>
                </div>
              </div>
              <div className="col-12 col-md-6  col-lg-7 d-flex  flex-column justify-content-sm-center justify-content-lg-center">
                <div className="col-12 d-flex flex-column justify-content-center">
                  <div className="col-md-12  d-flex justify-content-sm-center ">
                    <div className="singleRecipeTitleWideScreen mt-md-3 justify-content-sm-center  col-12 text-center">
                      <h1>{data.data[0].attributes.title.toUpperCase()}</h1>
                    </div>
                  </div>
                  {antalServings !== 4 ? (
                    <div className="col-12 col-md-12 mt-3 mt-md-2 col-md-6 d-flex justify-content-center mt-2 ">
                      <div className="col-10 col-md-10 reminderMsg d-flex col-12">
                        <p>
                          Att tänka på när du portionsomvandlar:
                          Tillagningstiden kan påverkas, och mängder under “gör
                          så här” ändras inte.
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="d-flex flex-row my-5 justify-content-center col-12">
                    <div className="PrepDiv">
                      <span className="PrepPara">Prep Time:</span>
                      <span>{data.data[0].attributes.prepTime} min</span>
                    </div>
                    <div className="Line"></div>
                    <div className="PrepDiv">
                      <span>Cook time:</span>
                      <span>{data.data[0].attributes.cookTime} min</span>
                    </div>
                    <div className="Line"></div>
                    <div className="PrepDiv">
                      <span>Serves:</span>
                      <div className="buttonDiv">
                        <span className="ServingsBtn" onClick={SubServings}>
                          -
                        </span>
                        <span>{antalServings}</span>
                        <span className="ServingsBtn" onClick={AddServings}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center mb-4">
                    <div className="col-10 col-md-12 col-sm-8 col-md-10 col-lg-8">
                      <div className="text-center">
                        {data.data[0].attributes.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-12 d-flex flex-column flex-md-row ">
            <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center justify-content-md-start">
              <div className="d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-center">
                  {data.data[0].attributes.recipe_keys.data.map((recipekey) => {
                    return (
                      <RecipeKeyIcon
                        key={recipekey.id}
                        keyIcon={recipekey.attributes.key}
                      />
                    );
                  })}
                </div>
                <div>
                  <ul className="text-center">
                    <p className="ingrediensP">Ingredienser:</p>
                    {ingredients.map((ingredient, index) => (
                      <li key={index} className="ingrediensLi">
                        <ReactMarkdown>
                          {ingredient.number
                            ? `${(ingredient.number * antalServings) / 4} ${
                                ingredient.text
                              }`
                            : ingredient.text}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center align-items-md-center flex-column">
                <div className="col-12 col-md-8 stepsDiv">
                  <p className="stepsP text-center">Gör så här:</p>
                  <ReactMarkdown>{data.data[0].attributes.steps}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="singlePageHr"></hr>
      <div className="d-flex justify-content-center">
        <div className="me-2">
          <h4>SPARA RECEPT</h4>
        </div>
        <div className="ms-2 bookMark">
          {clicked ? (
            <span onClick={favoritesClick}>
              {" "}
              <FontAwesomeIcon
                icon={BookmarkSolid}
                style={{ fontSize: "1.7rem", color: "black" }}
              />
            </span>
          ) : (
            <span onClick={favoritesClick}>
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ fontSize: "1.7rem", color: "black" }}
              />
            </span>
          )}
        </div>
      </div>
      <RecipeKey />
      <RelatedRecipes data={data.data[0].attributes.relatedRecept} id={id} />
    </div>
  );
}

export default SingleRecipe;
