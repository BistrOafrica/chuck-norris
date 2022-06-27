import React, {useEffect, useState} from "react";

//assets
import {FiUser} from "react-icons/fi";
import {BiError, BiKey} from "react-icons/bi";
import {FaEye, FaEyeSlash} from "react-icons/fa";

//components
import {Link, useNavigate} from "react-router-dom";

//hooks
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../../Store/Actions";
import {icon} from "../../Services/Services";

const SignUp=()=>{
    const {register, handleSubmit,reset}=useForm()
    const [showPass,setShowPass]=useState(false)
    const [err,setErr]=useState(false)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const loggedIn=useSelector((state)=>state.loggedIn)

    useEffect(()=>{
        if (loggedIn===true){
            navigate("/")
        }
    },[])
    const addNewUser=(user)=>{
        dispatch(setUsers(user))
        reset()
        alert(`${user.username} has been added successfully`)
    }

    const onSubmit=(values)=>{
        console.log(values,"user")
        if(values.password===values.confirmPassword){
            console.log("matched")
            setErr(false)
            addNewUser(values)
            navigate("/login")
        }
        else{
            console.log("No match")
            setErr(true)
        }
        /*dispatch(setUsers(values))
        navigate("/login")
        alert("User Added Successfully")*/
    }
    return(
        <>
            <div className={"login-page"}>
                    <div className={"container"}>
                        <img
                            src={icon}
                            alt={"cnJokes Logo"}
                            className={"logo"}
                        />
                        <p className={"cap-text"}>create a new CnJokes Account</p>
                        <form autoComplete={"off"} onSubmit={handleSubmit(onSubmit)}>
                            <div className={"form-item"}>
                                <FiUser className={"login Icons"}/>
                                <input type={"text"} placeholder={"Username"} id={"username"}{...register("username",{required:true})}/>
                            </div>
                            <div className={"form-item"}>
                                <BiKey/>
                                <input type={!showPass?"password":"text"} placeholder={"Password"} id={"password"}{...register("password",{required:true})}/>
                                <div onClick={()=>setShowPass(!showPass)}>
                                    {!showPass?<FaEye/>:<FaEyeSlash/>}
                                </div>
                            </div>
                            <div className={"form-item"}>
                                <BiKey/>
                                <input type={!showPass?"password":"text"} placeholder={"confirmPassword"} id={"confirmPassword"}{...register("confirmPassword",{required:true})}/>
                                <div onClick={()=>setShowPass(!showPass)}>
                                    {!showPass?<FaEye/>:<FaEyeSlash/>}
                                </div>
                            </div>
                            {err&&
                                <div className={"form-item"}>
                                    <i className={"danger"}><BiError/> Confirm Password Did not match</i>
                                </div>
                            }
                            <button type={"submit"} className={"btn btn-login"}>Signup</button>
                            <p className={"cap-text"}>Have an account?
                                <Link to={"/login"} className={"light-btn"}
                                >
                                    Login
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
        </>
    )
}
export default SignUp;