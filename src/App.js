import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import ToDos from './components/ToDos';
import uuid from 'uuid';


class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      toDos: []
    }
  }

  /*
  Below is a life cycle method. This is a better way to insert the array data. instead to declare it directl<
  in the constructor above.
  Outside Data sources should also go in this lifecyclemethod.
  */

  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }

  componentDidMount(){
   this.getToDos();
  }

  getToDos(){
    $.ajax({
           url: 'https://jsonplaceholder.typicode.com/todos',
           dataType: 'json',
           cache: false,
           success: function(data){
               this.setState({toDos: data}, function(){
                   console.log(this.state);
               });
           }.bind(this),
               error: function(xhr, status, err){
                   console.log(err);
               }
       });
  }

  getProjects(){
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
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects : projects});
  }

  render() {
    return (
      <div className = "App" >

      <h1>React Basics</h1>
      <h2>a CRUD example</h2>
      <a href="https://youtu.be/A71aqufiNtQ">React JS Crash Course</a>

      <AddProject addProject = {this.handleAddProject.bind(this)} />

      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

      <ToDos toDos={this.state.toDos} />

      </div>
    );
  }
}

export default App;
