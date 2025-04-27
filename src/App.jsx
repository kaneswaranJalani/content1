import React, { useState } from "react";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div className="app-container">
      <h1>Toggle Content</h1>
      <button onClick={handleToggle}>
        {showContent ? "Hide Content" : "Show Content"}
      </button>

      {/* Conditional Rendering using && */}
      {showContent && (
        <div className="content-box">
          <p>Hellooooo ! I am Jalani</p>
        </div>
      )}
    </div>
  );
}

export default App;
