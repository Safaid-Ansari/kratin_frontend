import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/CreateHealthTip.css";
function CreateHealthTip() {
  const [description, setHealthDescription] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleDescription = (e) => {
    setHealthDescription(e.target.value);
    setSubmitted(false);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(description && title)) {
      setError(true);
    } else {
      let data = { description, title };
      console.log(data);
      let result = await fetch(
        "https://kratin-backend-tsqx.onrender.com/api/v1/HealthTips/create",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      result = await result.json();
      console.log(result);
      setSubmitted(true);
      setError(false);
      navigate("/");
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1 style={{ marginLeft: "95px" }}>User successfully Login!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1 style={{ marginLeft: "95px" }}>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <div className="mainContainer">
        <div className="mainTitle">
          <h1>Here you can add health tips for Sunita Sharma </h1>
        </div>
        <div className="form">
          {" "}
          <div>
            <h1 className="heading">Health Tips Management</h1>
          </div>
          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
          <form>
            <label className="label">Title</label>
            <input
              onChange={handleTitle}
              className="input"
              placeholder="Enter Title here..."
              value={title}
              type="text"
            />
            <label className="label">HealthTips Description</label>
            <input
              onChange={handleDescription}
              className="input"
              placeholder="Enter Description here..."
              value={description}
              type="text"
            />

            <button onClick={handleSubmit} className="btn" type="submit">
              Add HealthTips
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateHealthTip;
