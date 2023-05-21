import React from "react";
import "./RecipeKey.css";
function RecipeKey() {
  return (
    <div className="recipeKey ">
      <div className=" container">
        <div className="row">
          <div className="d-flex col-12 recipeKeyContainer">
            <div className="col-12 col-md-3 TitleContainer">
              <h2 className="recipekeyTitle">RECIPE KEY:</h2>
            </div>
            <div className="col-12 col-md-9 d-flex justify-content-between">
              <div>
                <h1 className="key text-center">G</h1>
                <small className="keyName">Glutenfri</small>
              </div>
              <div>
                <h1 className="key text-center">L</h1>
                <small className="keyName">Laktosfri</small>
              </div>
              <div>
                <h1 className="key text-center">V</h1>
                <small className="keyName">Veganskt</small>
              </div>
              <div>
                <h1 className="key text-center">VG</h1>
                <small className="keyName">Vegetariskt</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeKey;
