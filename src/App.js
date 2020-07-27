import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Restaurant from "./Restaurant";
import Categories from "./Categories";
import Logo from "./logo.svg";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-jg.herokuapp.com/"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div className="container">
        {" "}
        <header className="header">
          <img className="logo" alt="logo deliveroo" src={Logo} />
        </header>
        <Restaurant
          title={data.restaurant.name}
          description={data.restaurant.description}
          image={data.restaurant.picture}
        />
        <div className="second-part">
          {data.categories.map((element, index) => {
            return <Categories name={element.name} meals={element.meals} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
