import React from "react";

import * as mainPhoto from "../images/me-cropped.jpg"

export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
          <header className="w3-container w3-center home-header" id="home">
              <h1 className="w3-jumbo main-title">Ronan Smith.</h1>
              <p className="main-subtitle"><span className="w3-hide-small">Computer Scientist & </span>Software Developer.</p>
              <img
                className="main-photo"
                src={mainPhoto}
                alt="me"
              />
          </header>
      </div>
    );
  }
}

export default HomePage;