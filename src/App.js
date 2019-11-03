import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
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

  // Delete Todo from todos
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          < Header />
          < AddTodo />
          < Todos todos={this.state.todos} toggleCheck={this.toggleCheck} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
