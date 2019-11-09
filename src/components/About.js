import React from "react";
import ReactMarkdown from "react-markdown";

import * as me from "../images/me_grad.jpg";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMeText: ""
    };
  }

  componentDidMount() {
    const aboutMePath = require("../markdown/About.md");

    fetch(aboutMePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          aboutMeText: text
        })
      })
  }

  render() {
    return (
      <div id="main">
        <h1 className="page-header">About Me</h1>
        <div className="w3-row about-me-container">
          <div className="about-me-photo-desktop w3-hide-small">
            {this.aboutMePhoto()}
          </div>
          <div className="w3-col m6 about-me-text">
            <ReactMarkdown source={this.state.aboutMeText} />
            <div className="contact-section">
              <h2>Contact</h2>
              <div className="contact-section-text">
                <p><i className="fa fa-user fa-fw w3-hover-text-black w3-medium w3-margin-right"></i>Ronan James Smith</p>
                <p><i className="fa fa-envelope fa-fw w3-hover-text-black w3-medium w3-margin-right"></i>ronan1874(at)aol.co.uk</p>
                <p><i className="fa fa-phone fa-fw w3-hover-text-black w3-medium w3-margin-right"></i>Available on Request</p>
              </div>
            </div>
          </div>
          <div className="w3-hide-large about-me-photo-mobile">
            {this.aboutMePhoto()}
          </div>
        </div>
      </div>
    );
  }

  aboutMePhoto() {
    return (
      <img className="w3-col m6 about-me-photo" src={me} alt="Graduation" />
    );
  }
}

export default About;
