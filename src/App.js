import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({todos: res.data}));
  }

  // Toggle Todo completed property
  toggleCheck = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    })});
  }

  // Delete todo from list
  // Check the response on this. If it can be used to setState on todos directly,
  // then we're not saving anything by filtering through todos after getting the response
  // Will it be faster/more sensible to:
  // 1: use the http response, or
  // 2: move the todos setState outside of the async function as it's not dependant on the response
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add new todo item
  addTodo = title => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            < Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                < AddTodo addTodo={this.addTodo} />
                < Todos todos={this.state.todos} toggleCheck={this.toggleCheck} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
