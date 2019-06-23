import React from "react";

class InfoCard extends React.Component {
  render(){
    return (
        <div className="w3-third w3-container w3-margin-bottom info-card">
            {this.props.photo &&
                (<img className="card-photo" width="100%" src={this.props.photo} alt={this.props.title} />)
            }
            <div className="w3-container">
                <p><b>{this.props.title}</b></p>
                <p>{this.props.description}</p>
                {this.props.url && (<p><a href={this.props.url}>{this.props.url}</a></p>)}
            </div>
        </div>
    );
  }
}

export default InfoCard;