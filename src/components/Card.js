import { useState } from "react";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const deleteTip = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
      };
      await fetch(
        `https://kratin-backend-tsqx.onrender.com/api/v1/HealthTips/delete/${props.id}`,
        requestOptions
      );
      navigate("/add-health-tip");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <h1>{props.title}</h1>
          {isExpanded ? (
            <div>
              <h3>{props.description}</h3>
              <button className="cardBtn" onClick={handleToggle}>
                Read Less
              </button>
              <button className="cardBtn" onClick={deleteTip}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <h3>{props.description.slice(0, 150)}...</h3>
              <button className="cardBtn" onClick={handleToggle}>
                Read More
              </button>
              <button className="cardBtn" onClick={deleteTip}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Card;
