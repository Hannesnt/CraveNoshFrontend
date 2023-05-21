import React from "react";
import "./RecipeKeyIcon.css";
function RecipeKeyIcon(props) {
  return (
    <div className="mt-2 mx-2 keyIcon">
      <h4>{props.keyIcon}</h4>
    </div>
  );
}

export default RecipeKeyIcon;
