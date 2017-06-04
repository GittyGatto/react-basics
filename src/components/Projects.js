import React, { Component } from 'react';
//import Planes from './components/Planes';

class Project extends Component {
  render() {

    let planes;
    if (this.props.planes){
      planes = this.props.planes.map(plane => {
         console.log(plane);
      });
    }



    return (
      <div className="Project">
                    <h2>Project Component</h2>
                    <p>{this.props.test}</p>
      </div>
    );
  }
}

export default Project;
