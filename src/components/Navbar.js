import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import About from "./About";
import CV from "./CV";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Resources from "./Resources";

const ABOUT_ME_PATH = "/about";
const PROJECTS_PATH = "/projects";
const RESOURCES_PATH = "/resources";
const CV_PATH = "/cv";

class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div className="navbar">
                    {/* Desktop Navbar */}
                    <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center desktop-navbar">
                        <NavLink
                            to="/home"
                            className={this.getNavButtonClassName()}
                            activeClassName="active"
                        >
                            <i className="fa fa-home w3-xlarge"></i>
                            <p>HOME</p>
                        </NavLink>
                        <NavLink
                            to={ABOUT_ME_PATH}
                            className={this.getNavButtonClassName()}
                            activeClassName="active"
                        >
                            <i className="fa fa-user w3-xlarge"></i>
                            <p>ABOUT</p>
                        </NavLink>
                        <NavLink
                            to={PROJECTS_PATH}
                            className={this.getNavButtonClassName()}
                            activeClassName="active"
                        >
                            <i className="fa fa-desktop w3-xlarge"></i>
                            <p>PROJECTS</p>
                        </NavLink>
                        <NavLink
                            to={RESOURCES_PATH}
                            className={this.getNavButtonClassName()}
                            activeClassName="active"
                        >
                            <i className="fa fa-code w3-xlarge"></i>
                            <p>RESOURCES</p>
                        </NavLink>
                        <NavLink
                            to={CV_PATH}
                            className={this.getNavButtonClassName()}
                            activeClassName="active"
                        >
                            <i className="fa fa-file w3-xlarge"></i>
                            <p>CV</p>
                        </NavLink>
                    </nav>

                    {/* Mobile Navbar */}
                    <div className="w3-top w3-hide-large w3-hide-medium" id="mobile-navbar">
                        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                            <NavLink to={ABOUT_ME_PATH} className="w3-bar-item w3-button mobile-nav-button longer-text">ABOUT</NavLink>
                            <NavLink to={PROJECTS_PATH} className="w3-bar-item w3-button mobile-nav-button longer-text">PROJECTS</NavLink>
                            <NavLink to={RESOURCES_PATH} className="w3-bar-item w3-button mobile-nav-button longer-text">RESOURCES</NavLink>
                            <NavLink to={CV_PATH} className="w3-bar-item w3-button mobile-nav-button shorter-text">CV</NavLink>
                        </div>
                    </div>
                    <div className="page-content">
                        <Switch>
                            <Route path="/resources" exact component={Resources} />
                            <Route path="/projects" exact component={Projects} />
                            <Route path="/about" exact component={About} />
                            <Route path="/home" exact component={HomePage} />
                            <Route path="/cv" exact component={CV} />
                            <Route path="/" exact component={HomePage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }

    getNavButtonClassName = () => {
        return "w3-bar-item w3-button w3-padding-large w3-hover-black desktop-nav-button";
    }
}

export default Navbar;
