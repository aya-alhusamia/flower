import React, { useState } from "react";

import { AddProductDiv, Button } from "../style";
import { signup } from "../store/action/userActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function AddUser() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddProductDiv>
        <input
          value={user.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="enter a firstName"
        />
        <input
          value={user.lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="enter a lastName"
        />
        <input
          value={user.username}
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="enter a username"
        />
        <input
          value={user.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="enter a password"
        />
        <input
          value={user.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="enter a email"
        />

        <Button type="submit">"Submit"</Button>
      </AddProductDiv>
    </form>
  );
}

export default AddUser;
