import React from "react";
import LazyLoad from "react-lazy-load";

function CV() {
  return (
    <div id="main">
      <div className="w3-content cv">
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <LazyLoad>
                <div className="w3-display-container cv-picture-container">
                  <img className="cv-picture" src="me4.jpg" alt="Ronan Smith" />
                </div>
              </LazyLoad>
              <div className="w3-container">
                <h2>Ronan James Smith</h2>
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue"></i>Software Developer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>Edinburgh, UK</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>ronan1874(at)aol.co.uk</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue"></i>Available on Request.</p>
                <hr />

                <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-blue"></i>Skills</b></p>
                <br />
                <p>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Java</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Python</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">TypeScript</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">JavaScript</span> 
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">HTML5</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">CSS</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sass</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Bootstrap</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">W3.CSS</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">NodeJS</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">React</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Redux</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">MySQL</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">MongoDB</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Java Spring</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">PHP</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">CakePHP</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">SML New Jersey</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Prolog</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">C</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Squarespace</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Google Docs</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Microsoft Office</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Git</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">GitHub</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">GitLab</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">XML</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">JSON</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">STRIPS/PDDL</span>
                </p>
                <br />
              </div>
            </div><br />
          </div>

          <div className="w3-twothird">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>Work Experience</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Developer @ Scott Logic</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>February 2019 - <span className="w3-tag w3-blue w3-round">Current</span></h6>
                <h5 className="w3-opacity"><b>Graduate Developer</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>August 2018 - February 2019</h6>
                <p>
                  I am currently working at software consultancy Scott Logic in the Edinburgh office. In this role I am being challenged
                  with lots of new experiences and I am learning a huge number of new skills.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Bartender @ Black Bull Inn</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>August 2015 - May 2018</h6>
                <p>This position has helped me to develop my knowledge of customer service and increase my skills in a customer facing role. </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Retail Assistant @ Farmfoods Ltd.</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>November 2013 - March 2015</h6>
                <p>This was an experience that introduced me to the working world outside of high school and it gave me a good insight of working under pressure in a fast-paced, busy retail environment.</p>
                <hr />
              </div>
            </div>
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="w3-text-blue"><i className="fa fa-graduation-cap"></i></i> Education</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Heriot-Watt University (BSc Computer Science)</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2014 - 2018</h6>
                <h6><b>Graduated June 2018 with Honours of the First-Class</b></h6>
                <p>
                  At Heriot-Watt I covered a vast number of areas of Computer Science.  I covered mathematics and logic, report writing, software development,
                  web development, database management and more. [<a href="grades/year4.html">See all courses and grades</a>].
                </p>
                <p>
                  I recieved a certificate of merit for my third year grades.  This is awarded to students who have an overall average of 70% or above
                  for all assessments in that year.
                  In my fourth year I graduated with Honours of the First-Class and was also awarded the 'Deputy Principal's award' as recognition
                  for achieving strong results.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>West Calder High School</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2008 - 2014</h6>
                <p>
                  I spent 6 years at West Calder high school. In my final year I was a prefect and a 'buddy' for the new first years.
                  I achieved 8 Highers, including 5 A grades [<a href="grades/highschool.html">See Grades</a>].
                </p>
                <hr />
              </div>
            </div>
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>Voluntary Work</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>STEM Ambassador</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>June 2017 - <span className="w3-tag w3-blue w3-round">Current</span></h6>
                <p>
                  I am registered as a STEM Ambassador, a voluntary, government-funded scheme which aims to promote the learning of STEM
                  (Science, Technology, Engineering, Maths) subjects.  A membership in this scheme means I will be invited along to many different events, usually
                  taking place in high schools around Edinburgh.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Computing in the Classroom</b></h5>
                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>October 2017 - March 2018</h6>
                <p>
                  As part of a university module called 'Computing in the Classroom', I worked as a teaching assistant in a computing classroom at my former school,
                  West Calder High School.  In 37 hours at the school I observed the class and wrote 2 reports on the teaching with relation to educational theory.
                  I also took the lead in the class for around 3 periods worth of time and prepared my own teaching materials for this.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;