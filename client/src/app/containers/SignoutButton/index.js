import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signout } from "../../state/authSlice";

const Signout = (props) => {
    const dispatch = useDispatch();

    const onClickSignout = async (e) => {
        try {
            e.preventDefault();
      
            const res = await axios.delete("/auth/local");
      
            if (res.status === 200) {
              dispatch(signout());
            }
          } catch (error) {
            console.error(error);
          }
    }
    return(
        <button onClick={onClickSignout} {...props} >Sign Out</button>
    )

}

export default Signout;