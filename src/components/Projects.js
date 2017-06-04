import React, { Component } from 'react';
import ProjectItems from './ProjectItems';

class Projects extends Component {
  render() {

let projectItems;
if(this.props.projects){
  projectItems = this.props.projects.map(project =>{
  return(
      <ProjectItems key={project.name} project = {project}/>
  );
  });
}





    return (
      <div className="Project">
          <h2>My Projects Component</h2>
          {projectItems}
      </div>
    );
  }
}

export default Projects;
