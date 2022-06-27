import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FiUser} from "react-icons/fi";
import {
    setUnAuthState,
    unSetUser
} from "../../Store/Actions";
import {useNavigate} from "react-router-dom";
import MyJokes from "./MyJokes";
//Services


const User=()=>{
    const user = useSelector((state)=>state.User)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const onLogOut=()=>{
        dispatch(setUnAuthState())
        dispatch(unSetUser())
        navigate("/login")
    }


    return(
        <>
            <div className={"user"}>
                <h5>Profile</h5>
                <div className={"avatar"}>
                    <FiUser className={"login Icons"}/>
                </div>
                <div className={"user-details"}>
                    <p>@{user.username||"John Doe"}</p>
                    <button onClick={()=>onLogOut()} className={"light-btn btn"}>Log out</button>
                </div>
            </div>
            <div className={"jokes-desktop"}>
                <MyJokes/>
            </div>
        </>
    )
}
export default User;