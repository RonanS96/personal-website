import React from "react";

function HomePage() {
  return (
    <div>
        <header className="w3-container w3-center home-header" id="home">
            <h1 className="w3-jumbo main-title"><span className="w3-hide-small">I'm</span> Ronan Smith.</h1>
            <p className="main-subtitle"><span className="w3-hide-small">Computer Scientist & </span>Software Developer.</p>
            <img className="main-photo" src="me-cropped.jpg" alt="me" />
        </header>
    </div>
  );
}

export default HomePage;