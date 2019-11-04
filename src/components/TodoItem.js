import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    // Supplied completed todos get the appropriate line-through, but the checkbox is still unchecked
    // Why do we use getStyle as a function instead of a regular object? Possibly the conditional assignment?
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { title, id, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={completed} onChange={this.props.toggleCheck.bind(this, id)}/>
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleCheck: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
