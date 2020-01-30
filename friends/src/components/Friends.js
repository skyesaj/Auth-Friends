import React from "react";

const Friends = props => {
  return (
    <div>
      <h1> Name: {props.data.name}</h1>
      <p class="age"> Age:{props.data.age}</p>
      <p class="email"> Email: {props.data.email}</p>
    </div>
  );
};

export default Friends;
