import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'PEPS Halloween',
        completed: false
      }
    ]
  }

  // Toggle Todo completed property
  toggleCheck = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    })});
  }

  // Delete todo from list
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add new todo item
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          < Header />
          < AddTodo addTodo={this.addTodo} />
          < Todos todos={this.state.todos} toggleCheck={this.toggleCheck} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
