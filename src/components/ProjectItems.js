import React, { Component } from 'react';


class ProjectItems extends Component {
  render() {
    return (
      <li className="Projects">
        {this.props.project.name} - {this.props.project.designer}
      </li>
    );
  }
}

export default ProjectItems;
