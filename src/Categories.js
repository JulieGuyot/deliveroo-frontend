import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = (props) => {
  return (
    <div className="meals">
      <div className="meals-title">{props.name}</div>
      <div className="meal">
        {props.meals.map((meal, index) => {
          return (
            <div className="columns">
              <div className="left-element">
                <div className="meal-title">{meal.title}</div>
                <div className="meal-description">{meal.description}</div>
                <div className="bottom">
                  <span className="price">{meal.price + " €"}</span>{" "}
                  <span className="popular">
                    {meal.popular ? <i class="fas fa-star "></i> : ""}
                    {meal.popular ? "  Populaire" : ""}
                  </span>
                </div>
              </div>
              {meal.picture && (
                <img className="meal-picture" src={meal.picture} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
