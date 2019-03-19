import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import TodoCount from "./TodoCount";

class TodoList extends Component {
  state = {
    todos: [
      { _id: "RR-diGNXc", finish: false, task: "Get Coffee" },
      { _id: "ED-doDXNc", finish: true, task: "Get Tea" }
    ]
  };

  addTodo = task => {
    this.setState({
      todos: [task, ...this.state.todos]
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo._id !== id)
    });
  };

  toggleFinish = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo._id === id
          ? {
              ...todo,
              finish: !todo.finish
            }
          : todo;
      })
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="row">
        <div className="content-one container border-bottom">
          <div className="header d-flex justify-content-center">
            <div className="align-self-center">
              <strong>Monday,</strong> March 14th
            </div>
          </div>
        </div>

        <div className="content-two container">
          <ul className="list-group row">
            {/* Active tasks */}
            {todos.map(
              todo =>
                !todo.finish && (
                  <Todos
                    key={todo._id}
                    toggleFinish={() => this.toggleFinish(todo._id)}
                    todo={todo}
                    onDelete={() => this.deleteTodo(todo._id)}
                  />
                )
            )}

            {/* Completed tasks */}
            {todos.map(
              todo =>
                todo.finish && (
                  <Todos
                    key={todo._id}
                    toggleFinish={() => this.toggleFinish(todo._id)}
                    todo={todo}
                    onDelete={() => this.deleteTodo(todo._id)}
                  />
                )
            )}
          </ul>
        </div>

        <div className="content-three container border-top">
          <div className="footer d-flex align-items-center">
            <TodoCount todos={todos} />
            <TodoForm onSubmit={this.addTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
