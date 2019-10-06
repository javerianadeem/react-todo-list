import React from 'react';
import Todos from './Components/Todos.js';
import AddTodo from './Components/AddTodo.js'

class App extends React.Component {
  state = {
    todos: [
      null
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos;
    const prevTodos = JSON.parse(localStorage.getItem("todos"));
    if (prevTodos !== null) {
      todos = [...prevTodos, todo]
    }

    else

      todos = [todo]
    localStorage.setItem("todos", JSON.stringify(todos))
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let todos = JSON.parse(localStorage.getItem("todos")).filter(todo => {
      return todo.id !== id
    })
    localStorage.setItem("todos", JSON.stringify(todos))
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <h2 className="text-info text-center mt-3">Todo's</h2>
        <br></br>
        <Todos deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}


export default App;
