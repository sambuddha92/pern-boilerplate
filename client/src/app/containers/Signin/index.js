import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "./index.scss";

import { signin, signout } from "../../state/authSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const defaultLocalState = {
    loginId: "",
    password: "",
  };

  const [localState, setLocalState] = useState(defaultLocalState);

  const onChangeLoginId = (e) => {
    e.preventDefault();
    setLocalState({ ...localState, loginId: e.target.value });
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    setLocalState({ ...localState, password: e.target.value });
  };

  const onClickSignIn = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("/auth/local", {
        login_id: localState.loginId,
        password: localState.password,
      });

      if (res.status === 200) {
        const { expires, user } = res.data.payload;
        dispatch(signin({ expires, user }));
      }

      setLocalState(defaultLocalState);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSignOut = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.delete("/auth/local");
      setLocalState(defaultLocalState);
      if (res.status === 200) {
        dispatch(signout());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Signin">
      <input
        type="text"
        placeholder="Your Login Id"
        value={localState.loginId}
        onChange={onChangeLoginId}
      />
      <input
        type="password"
        placeholder="Your Password"
        value={localState.password}
        onChange={onChangePassword}
      />
      <button onClick={onClickSignIn}>Sign In</button>
      {auth.isAuthenticated ? (
        <button onClick={onClickSignOut}>Sign Out</button>
      ) : null}
    </div>
  );
};

export default Signin;
