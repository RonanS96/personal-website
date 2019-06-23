import React from "react";
import InfoCard from "./InfoCard";
import { returnAllResources } from "../utils/resources";

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      resources: []
    }
  }

  componentDidMount() {
    this.setState({
      resources: returnAllResources()
    });
  }

  render(){
    return (
      <div id="main">
        <h1 className="page-header">Resources</h1>
        <p className="page-subtitle">
          A collection of useful resources that I have come across and used in university, work and personal projects.
        </p>
        {this.state.resources.map((resourceGroup, i) =>  {
          return (
            <div key={i} className="w3-row-padding">
              {resourceGroup.map(resource =>
                (
                  <InfoCard
                    key={resource.title}
                    photo={resource.photo}
                    title={resource.title}
                    description={resource.description}
                    url={resource.url}
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