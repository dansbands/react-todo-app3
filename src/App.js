import React, { Component } from 'react';
import './css/App.css';

import Input from './components/input.js'
import Todo from './components/todo.js'

class App extends Component {
  state = {
    value: '',
    todos: ['abc', '123', 'howdy'],
    editing: -1,
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        this.state.value
      ],
      value: ''
    })
  }

  handleReorderUp = index => {
    let array = this.state.todos;

    if (index > 0) {
      array.splice(index - 1, 0, array.splice(index, 1)[0]);
      this.setState({ todos: array })
    }
  }

  handleReorderDown = index => {
    let array = this.state.todos;

    if (index < array.length - 1) {
      array.splice(index + 1, 0, array.splice(index, 1)[0]);
      this.setState({ todos: array })
    }
  }

  toggleEdit = (index) => {
    let value = this.state.todos[index]

    this.setState({
      editing: index,
      editValue: value
    })
  }

  handleEdit = e => {
    this.setState({
      editValue: e.target.value
    })
  }

  submitEdit = index => {
    let array = this.state.todos;
    array[index] = this.state.editValue

    this.setState({
      todos: array,
      editValue: '',
      editing: -1,
    })
  }

  handleDelete = index => {
    let array = this.state.todos;
    array.splice(index, 1);
    this.setState({ todos: array })
  }

  renderTodos = e => {
    return this.state.todos.map((todo, idx) => {
      // console.log('render todo', todo);
      return (
        <Todo
          key={idx}
          data={todo}
          index={idx}
          editing={this.state.editing}
          dataToEdit={this.state.editValue}
          toggleEdit={this.toggleEdit}
          handleEdit={this.handleEdit}
          submitEdit={this.submitEdit}
          orderUp={this.handleReorderUp}
          orderDown={this.handleReorderDown}
          onDelete={this.handleDelete}/>
      )

    })
  }

  render() {
    // console.log('todos', this.state);
    return (
      <div className="App">
        <header>
          <h3>React To-Do App</h3>
          <Input
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            />
        </header>
        <div className="todo-container">
          {this.renderTodos()}
        </div>

      </div>
    );
  }
}

export default App;
