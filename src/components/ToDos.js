import React, { Component } from 'react';
import ToDoItems from './ToDoItems';

class ToDos extends Component {

  render() {
    let toDoItems;
    if(this.props.toDos){
      toDoItems = this.props.toDos.map(toDo =>{
        return(
          <ToDoItems key={toDo.title} toDo = {toDo}/>
        );
      });
    }

    return (

      <div className="Todo">
      <h2>My toDo list</h2>
      {toDoItems}
      </div>
    );
  }
}

ToDos.propTypes ={
  toDos:  React.PropTypes.array
  }

export default ToDos;