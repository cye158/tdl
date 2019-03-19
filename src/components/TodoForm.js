import React, { Component } from "react";
import sid from "shortid";
import Joi from "joi";

class TodoForm extends Component {
  state = {
    text: "",
    inputBoxShow: false
  };

  toggleInputBox = () => {
    this.setState({
      inputBoxShow: !this.state.inputBoxShow
    });
  };

  handleInput = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { error } = validate({ text });

    console.log(error);

    if (error) {
      return alert(
        "Note: Task should start with a letter or number, and should have 1 to 25 characters."
      );
    }

    this.props.onSubmit({
      _id: sid.generate(),
      task: text,
      finish: false
    });
    this.setState({
      text: "",
      inputBoxShow: false
    });
  };

  render() {
    /* Show input box after 'ADD NEW' is clicked */
    let todoInput = this.state.inputBoxShow ? (
      <input
        size="24"
        value={this.state.task}
        onChange={this.handleInput}
        placeholder="Enter Task  (eg. Buy tea later)"
      />
    ) : (
      <span onClick={this.toggleInputBox} style={{ cursor: "pointer" }}>
        <strong>ADD NEW</strong>
      </span>
    );

    let addTodo = !this.state.inputBoxShow
      ? this.toggleInputBox
      : this.handleSubmit;

    return (
      <div className="col" style={{ padding: 0 }}>
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="col text-right" style={{ paddingRight: 0 }}>
            {todoInput}
          </div>
          <div className="col-2 align-self-center todo-icons">
            <i
              className="fas fa-plus todo-add"
              style={{ padding: 2 }}
              onClick={addTodo}
            />
          </div>
        </form>
      </div>
    );
  }
}

/* Validate user input */
const validate = text => {
  const inputSchema = Joi.object().keys({
    text: Joi.string()
      .regex(/^[a-zA-Z0-9]/)
      .min(1)
      .max(25)
      .required()
  });

  return Joi.validate(text, inputSchema);
};

export default TodoForm;
