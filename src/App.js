import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';


class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  /*
  Below is a life cycle method. This is a better way to insert the array data. instead to declare it directl<
  in the constructor above.
  Outside Data sources should also go in this lifecyclemethod.
  */
  componentWillMount(){
    this.setState({projects : [
      {
        id: uuid.v4(),
        title: 'Project 1',
        category: 'Category A'
      },
      {
        id: uuid.v4(),
        title: 'Project 2',
        category: 'Category B'
      },
      {
        id: uuid.v4(),
        title: 'Project 3',
        category: 'Category C'
      }
    ]});
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects : projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index =   projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects : projects});
    }


  render() {
    return (
      <div className = "App" >

      <h1>React Basics</h1>

      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

      <AddProject addProject = {this.handleAddProject.bind(this)} />

      </div>
    );
  }
}

export default App;
