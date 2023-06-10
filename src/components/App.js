// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setImage(data.message);
        setLoaded(true);
      });
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h3>App</h3>
      <img src={image} alt="A Random Dog"></img>
    </>
  );
}

export default App;
