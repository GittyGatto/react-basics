import React, { Component } from 'react';

class ToDoItems extends Component {

  render() {
    return (
      <li className="TodoItem">
        {this.props.toDo.title}
      </li>
    );
  }
}

ToDoItems.propTypes ={
  toDo:  React.PropTypes.object
  }

export default ToDoItems;
