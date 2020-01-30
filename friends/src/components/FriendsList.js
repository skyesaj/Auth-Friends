// import React from "react";
import React, { Component } from "react";
import { axiosWithAuth } from "../axiosAuth";
import Friends from "./Friends";
import FriendsForm from "./FriendsForm";

class FriendsList extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addFriends = friend => {
    axiosWithAuth()
      .post(
        "http://localhost:5000/api/friends",
        JSON.parse(JSON.stringify(friend))
      )
      .then(res => {
        this.getData();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <FriendsForm addFriend={this.addFriend} />
        {this.state.friends.map(friend => {
          return <Friends key={friend.id} data={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
