import React, { Component } from 'react';
import ProjectItems from './ProjectItems';

class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project =>{
        return(
          <ProjectItems onDelete={this.deleteProject.bind(this)} key={project.title} project = {project}/>
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

Projects.propTypes ={
  projects:  React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
