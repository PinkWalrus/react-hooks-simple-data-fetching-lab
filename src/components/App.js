import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setImage(data.message);
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) return <p>Loading...</p>;

  return (
    <div>
      <img alt="A Random Dog" src={image} />
    </div>
  );
}

export default App;
