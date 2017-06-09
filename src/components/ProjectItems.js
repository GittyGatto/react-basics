import React, { Component } from 'react';

class ProjectItems extends Component {

  deleteProject(id){
  this.props.onDelete(id);
  }

  render() {
    return (
      <li className="ProjectItem">
        {this.props.project.title} - {this.props.project.category} - <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItems.propTypes ={
  project:  React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItems;
