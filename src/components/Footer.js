import React from "react";

function Footer() {
  return (
    <div>
        <footer className="w3-content w3-padding-32 w3-text-grey w3-xlarge w3-center footer">
            <h5><a className="home-link" href="/home">Ronan Smith</a> | {getCurrentYear()}</h5>
            <div className="navbar-links">
              <a href="https://github.com/RonanS96"><i className="fa fa-github"></i></a>{" "}
              <a href="https://www.instagram.com/ronansmithers/"><i className="fa fa-instagram"></i></a>{" "}
              <a href="https://twitter.com/RJSmith143"><i className="fa fa-twitter"></i></a>{" "}
              <a href="https://linkedin.com/in/ronan-smith-3470a7a6"><i className="fa fa-linkedin"></i></a>{" "}
            </div>
        </footer>
    </div>
  );
}

function getCurrentYear() {
  const d = new Date();
  return d.getYear() + 1900;
}

export default Footer;