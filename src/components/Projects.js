import React from "react";
import { returnAllPersonalProjects } from "../utils/projects";
import InfoCard from "./InfoCard";

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.setState({
      projects: returnAllPersonalProjects()
    });
  }

  render(){
    return (
      <div id="main">
        <h1 className="page-header">Projects</h1>
        {this.state.projects.map((projectGroup, i) =>  {
          return (
            <div key={i} className="w3-row-padding">
              {projectGroup.map(project =>
                (
                  <InfoCard
                    key={project.title}
                    photo={project.photo}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                  />
                )
              )}
            </div>)
        })}
      </div>
    );
  }
}

export default Projects;
