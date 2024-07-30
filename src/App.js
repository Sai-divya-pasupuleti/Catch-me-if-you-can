// Import necessary libraries
import React, { useState} from "react";
import "./App.css";

function App() {
  const [upd, setUpd] = useState({
    x: 0,
    y: 0,
  });
  return (
    <>
      <img
        src="https://cdn.pixabay.com/animation/2023/07/01/12/25/12-25-50-208_512.gif" alt="img"
        style={{
          width: 200,
          height: 200,
          transition: "all 1s",
          position: "absolute",
          left: upd.x,
          top: upd.y,
        }}
        onMouseOver={() => {
          setUpd({
            x: (Math.random() * 7860) % window.innerWidth,
            y: (Math.random() * 1000) % window.innerHeight,
          });
        }}
      />
    </>
  );
}
export default App;
