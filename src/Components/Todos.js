import React from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';

const Todos = ({ deleteTodo }) => {
  let todos = JSON.parse(localStorage.getItem("todos"))
  //le there is no data, initialize an empty array
  if (todos == null) {
    todos = []
  }

  const todoList = todos.length !== 0 ? (
    todos.map(todo => {
      return (
        <ListGroupItem key={todo.id} className="bg-light">
          <span>{todo.content}</span>
          <p className="mb-0" style={{float: "right"}}>
            <i className="fa fa-trash-o" onClick={() => { deleteTodo(todo.id) }}></i>
          </p>
        </ListGroupItem>
      )
    })
  ) : (
      <p>Wohoo! You have no todo's left.</p>
    );

  return (
    <Container>
      <ListGroup>
        {todoList}
      </ListGroup>
    </Container>
  )
}

export default Todos;
