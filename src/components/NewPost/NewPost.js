import React from "react";
import "./NewPost.css";
import "../../Global.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
function NewPost(data) {
  return (
    <div className="maindivNewPost">
      <article className="newPostContainer container">
        <div className="row newPostRow ">
          <div className="newImg  col-12 col-sm-8 mt-3 mt-lg-0 col-lg-5">
            <div className="col-6 col-md-6 d-flex justify-content-center">
              <Carousel>
                {data.data.data[0].attributes.NewRecipeImage.data.map(
                  (carouselImage) => {
                    return (
                      <Carousel.Item key={carouselImage.id}>
                        <Link to={`/recept/${data.data.data[0].id}`}>
                          <img
                            className="d-block carouselImageNew"
                            src={`http://localhost:1337${carouselImage.attributes.url}`}
                            alt={carouselImage.title}
                          />
                        </Link>
                      </Carousel.Item>
                    );
                  }
                )}
              </Carousel>
            </div>
          </div>
          <div className="newTextContainer md-mb-0  col-12 col-sm-10 col-md-8 col-lg-5">
            <Link to={`/recept/${data.data.data[0].id}`}>
              <div className="TextDiv  " key={data.data.data[0].id}>
                <span>NYTT RECEPT</span>
                <h1 className="my-3 ">
                  {data.data.data[0].attributes.title.toUpperCase()}
                </h1>
                <hr className="recipeHr" />
                <p>{data.data.data[0].attributes.description}</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default NewPost;
