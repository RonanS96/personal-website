import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import * as classNames from 'classnames';

import About from "./About";
import CV from "./CV";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Resources from "./Resources";

const ABOUT_ME_PATH = "/about";
const PROJECTS_PATH = "/projects";
const RESOURCES_PATH = "/resources";
const CV_PATH = "/cv";

class Navbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mobileNavbarOpen: false
        };
    }

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
                    <div className="topnav w3-hide-large w3-hide-medium">
                        <div className={classNames("mobile-navbar", this.state.mobileNavbarOpen ? "open" : "closed")}>
                            <NavLink
                                to="/home"
                                className={"mobile-nav-link first"}
                                activeClassName="active"
                                onClick={this.closeMobileNavbar}
                            >
                                <div>Ronan Smith</div>
                            </NavLink>
                            <div className="dropdown-links">
                                <NavLink
                                    to={ABOUT_ME_PATH}
                                    className={"mobile-nav-link"}
                                    activeClassName="active"
                                    onClick={this.closeMobileNavbar}
                                >
                                    <i className="fa fa-user w3-large"></i>
                                    <div>About Me</div>
                                </NavLink>
                                <NavLink
                                    to={PROJECTS_PATH}
                                    className={"mobile-nav-link"}
                                    activeClassName="active"
                                    onClick={this.closeMobileNavbar}
                                >
                                    <i className="fa fa-desktop w3-large"></i>
                                    <div>Projects</div>
                                </NavLink>
                                <NavLink
                                    to={RESOURCES_PATH}
                                    className={"mobile-nav-link"}
                                    activeClassName="active"
                                    onClick={this.closeMobileNavbar}
                                >
                                    <i className="fa fa-code w3-large"></i>
                                    <div>Resources</div>
                                </NavLink>
                                <NavLink
                                    to={CV_PATH}
                                    className={"mobile-nav-link"}
                                    activeClassName="active"
                                    onClick={this.closeMobileNavbar}
                                >
                                    <i className="fa fa-file w3-large"></i>
                                    <div>CV</div>
                                </NavLink>
                            </div>
                        </div>
                        <a href="javascript:void(0)" className="icon" onClick={this.toggleMobileMenu}>
                            {this.state.mobileNavbarOpen ? (
                                    <i className="fa fa-times"></i>
                                ) : (
                                    <i className="fa fa-bars"></i>
                            )}
                        </a>
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

    toggleMobileMenu = () => {
        this.setState({
            mobileNavbarOpen: !this.state.mobileNavbarOpen
        });
    }

    closeMobileNavbar = () => {
        this.setState({
            mobileNavbarOpen: false
        });
    }

    getNavButtonClassName = () => {
        return "w3-bar-item w3-button w3-padding-large w3-hover-black desktop-nav-button";
    }
}

export default Navbar;
