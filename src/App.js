import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';



class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [{
          name: 'P-51 Mustang',
          designer: 'Edgar Schmued'
        },
        {
          name: 'Supermarine Spitfire',
          designer: 'Reginald Joseph Mitchell'
        },
        {
          name: 'BF 109 Messerschmidt',
          designer: 'Willy Messerschmitt '
        }
      ]
    }
  }


  render() {
    return (
      <div className = "App" >

      <h1> React Basics </h1>

      <Projects projects={this.state.projects} />


      </div>
    );
  }
}

export default App;
