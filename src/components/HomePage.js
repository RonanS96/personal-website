import React from "react";
import Img from "react-image";

export class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true
    }

    this.hideLoader = this.hideLoader.bind(this);
  }

  render() {
    return (
      <div>
          <header className="w3-container w3-center home-header" id="home">
              <h1 className="w3-jumbo main-title"><span className="w3-hide-small">I'm</span> Ronan Smith.</h1>
              <p className="main-subtitle"><span className="w3-hide-small">Computer Scientist & </span>Software Developer.</p>
              <Img
                className="main-photo"
                src="me-cropped.jpg"
                alt="me"
                loader={this.loader()}
              />
          </header>
      </div>
    );
  }

  loader() {
    return (
      <img className="main-photo spinner" alt="Me" src="images/loading-spinner.gif"></img>
    )
  }

  hideLoader() {
    this.setState({
      isLoading: false
    })
  }
}

export default HomePage;