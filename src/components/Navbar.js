import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import CV from "./CV";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Resources from "./Resources";

const ABOUT_ME_PATH = "/about";
const PROJECTS_PATH = "/projects";
const RESOURCES_PATH = "/resources";
const CV_PATH = "/cv";

function Navbar() {
  return (
    <Router>
        <div className="navbar">
            {/* Desktop Navbar */}
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center desktop-navbar">
                <Link to="/home" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-home w3-xlarge"></i>
                    <p>HOME</p>
                </Link>
                <Link to={ABOUT_ME_PATH} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-user w3-xlarge"></i>
                    <p>ABOUT</p>
                </Link>
                <Link to={PROJECTS_PATH} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-desktop w3-xlarge"></i>
                    <p>PROJECTS</p>
                </Link>
                <Link to={RESOURCES_PATH} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-code w3-xlarge"></i>
                    <p>RESOURCES</p>
                </Link>
                <Link to={CV_PATH} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-file w3-xlarge"></i>
                    <p>CV</p>
                </Link>
            </nav>

            {/* Mobile Navbar */}
            <div className="w3-top w3-hide-large w3-hide-medium" id="mobile-navbar">
                <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <Link to={ABOUT_ME_PATH} className="w3-bar-item w3-button mobile-nav-button longer-text">ABOUT</Link>
                    <Link to={PROJECTS_PATH} className="w3-bar-item w3-button mobile-nav-button longer-text">PROJECTS</Link>
                    <Link to={RESOURCES_PATH} className="w3-bar-item w3-button mobile-nav-button longer-text">RESOURCES</Link>
                    <Link to={CV_PATH} className="w3-bar-item w3-button mobile-nav-button shorter-text">CV</Link>
                </div>
            </div>
            <div className="page-content">
                <Route path="/resources" exact component={Resources} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/about" exact component={About} />
                <Route path="/home" exact component={HomePage} />
                <Route path="/cv" exact component={CV} />
                <Route path="/" exact component={HomePage} />
            </div>
        </div>
    </Router>
  );
}

export default Navbar;