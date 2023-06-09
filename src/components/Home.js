import "../App.css";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Home.css";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://kratin-backend-tsqx.onrender.com/api/v1/HealthTips/get")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setData(data.HealthInfo);
        console.log(data.HealthInfo);
      });
  }, []);

  return (
    <div>
      <h1 className="Heading">
        Here are some general suggestions and considerations
      </h1>
      {data.map((HealthTip, index) => (
        <Card
          title={HealthTip.title}
          description={HealthTip.description}
          rating={HealthTip.rating}
          id={HealthTip._id}
          key={index}
        ></Card>
      ))}
    </div>
  );
}

export default Home;
