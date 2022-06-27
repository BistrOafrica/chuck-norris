import React, {useEffect, useState} from "react";

//Hooks
import {useForm} from "react-hook-form";

//Assets
import {FiUser} from "react-icons/fi";
import {BiError, BiKey} from "react-icons/bi";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Services, {icon} from "../../Services/Services";
import {setAuthState, setUser} from "../../Store/Actions";

const Login=()=>{
    const {register, handleSubmit,reset}=useForm()
    const [showPass,setShowPass]=useState(false)
    const users=useSelector((state)=>state.Users)
    const dispatch=useDispatch();
    const services=new Services(this)
    const navigate=useNavigate();
    const loggedIn=useSelector((state)=>state.loggedIn)
    const [err,setErr]=useState(false)
    const [errMsg,setErrMsg]=useState("")

    useEffect(()=>{
        if (loggedIn===true) {
            navigate("/")
        }
    },[loggedIn])
    console.log("users",users)
    const login=(user)=>{
        dispatch(setAuthState())
        dispatch(setUser(user))
        reset()
    }

    const onSubmit=(values)=>{
        console.log(users)
        console.log(values)
        services.loginUser(values,users)
            .then((res)=>{
                console.log(res)
                if (res.status===200){
                    login(res.user)
                    setErr(false)
                    navigate("/")
                }
                else if(res.status===404){
                    setErr(true)
                    setErrMsg(res.msg)
                }
                else if(res.status===401){
                    setErr(true)
                    setErrMsg(res.msg)
                }
            })
            .catch((e)=>{
                console.warn(e)
            })
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
                    <p className={"cap-text"}>Log in to cnJokes for jokes...</p>
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
                        {err&&
                        <div className={"form-item"}>
                            <i className={"danger"}><BiError/> {errMsg}</i>
                        </div>
                        }
                        <button type={"submit"} className={"btn btn-login"}>Login</button>
                        <p className={"cap-text"}>New to CNJOKES?
                            <Link to={"/signup"} className={"light-btn"}
                            >
                                SIGN UP
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;