import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';
import AddProject from './components/AddProject';


class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

/*
Below is a life cycle methode. This is a better way to insert the array data. instead to declare it directl<
in the constructor above.

Outside Data sources should also go in this lifecyclemethode.
*/
  componentWillMount(){
    this.setState({projects : [
      {
          title: 'Project 1',
          category: 'Category A'
        },
        {
          title: 'Project 2',
          category: 'Category B'
        },
        {
          title: 'Project 3',
          category: 'Category C'
        }
    ]});
  }
    
    handleAddProject(project){
        console.log(project);
    }


  render() {
    return (
      <div className = "App" >

      <h1>React Basics</h1>

      <Projects projects={this.state.projects} />

        <AddProject addProject = {this.handleAddProject.bind(this)} />

      </div>
    );
  }
}

export default App;
