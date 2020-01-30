// import React from "react";
import React, { Component } from "react";

class FriendsForm extends Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      TouchList.state.friend.name !== "" &&
      this.state.friend.age !== "" &&
      this.state.friend.email !== ""
    ) {
      this.props.addFriend(JSON.parse(JSON.stringify(this.state.friend)));
      this.setState({
        friend: {
          name: "",
          age: "",
          email: ""
        }
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
        </div>
        <button type="submit"> Add Friend</button>
      </form>
    );
  }
}

export default FriendsForm;
