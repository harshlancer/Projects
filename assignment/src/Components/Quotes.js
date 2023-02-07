import "./Components.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Navigation from "./Navigation";
import { Navigate } from "react-router-dom";

export const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedinUser = localStorage.getItem("authenticated");
    if (loggedinUser) {
      setauthenticated(true);
    }
  }, []);

  const apiUrl = "https://type.fit/api/quotes";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        setQuote(data[Math.floor(Math.random() * data.length)].text)
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const handleLogin = () => {
    localStorage.setItem("authenticated", true);
    setauthenticated(true);
  };

  if (authenticated === true) {
    return (
      <>
        <Navigation />
        <div className="body">
          <div className="quote">
            <span>
              <h2 className="heading">
                <i>Quote of The Day:</i>
              </h2>{" "}
              {quote}
            </span>
          </div>

          <div>
            <img className="image" src="https://source.unsplash.com/random" />
          </div>
        </div>
      </>
    );
  }
  if (authenticated === false || authenticated === null) {
    return <Login handleLogin={handleLogin} />;
  }
};
