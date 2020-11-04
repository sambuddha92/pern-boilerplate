import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signin } from "../../state/authSlice";

import "./index.scss";

const Signup = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const defaultLocalState = {
    loginId: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const [localState, setLocalState] = useState(defaultLocalState);

  const handleChange = (e) => {
    e.preventDefault();
    setLocalState({ ...localState, [e.target.name]: e.target.value });
  };

  const onClickSignup = async (e) => {
    try {
      e.preventDefault();

      if (localState.loginId === "" || localState.password === "" || localState.firstName === "") {
        window.alert("Login id, Password or First name cannot be blank");
        return;
      }

      const res = await axios.post("/api/user", {
        login_id: localState.loginId,
        password: localState.password,
        first_name: localState.firstName,
        last_name: localState.lastName,
      });

      setLocalState(defaultLocalState);

      if (res.status === 200) {
        const { expires, user } = res.data.payload;
        dispatch(signin({ expires, user }));
        history.replace({
          pathname: process.env.REACT_APP_DEFAULT_LOGIN_REDIRECT,
        });
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        window.alert(error.response.data.message);
      }
    }
  };

  return (
    <div className="Signup">
      <div className="inner container is-fluid">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={localState.firstName}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={localState.lastName}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          placeholder="Login Id"
          name="loginId"
          value={localState.loginId}
          onChange={handleChange}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={localState.password}
          onChange={handleChange}
          className="input"
        />
        <button onClick={onClickSignup} className="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
