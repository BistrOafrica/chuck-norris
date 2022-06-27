import React, {useEffect, useState} from "react";

//Components
import Categories from "./Categories";
import User from "./User";
import Feed from "./Feed";
import {icon} from "../../Services/Services";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Home=()=>{
    const navigate=useNavigate();
    const loggedIn=useSelector((state)=>state.loggedIn)
    const showUser=useState(false)
    const [showDrawer,setShowDrawer]=useState(false)


    const toggleShowDrawer=()=>setShowDrawer(!showDrawer)

    useEffect(()=>{
        if (loggedIn===false) {
            navigate("/login")
        }
    },[])

    return(
        <>
            <div className={"home-page"}>
                {showDrawer&&
                    <div className={"drawer-mobile"}>
                        <User/>
                    </div>
                }
                <div className={"top-bar"}>
                    <img
                        src={icon}
                        alt={"cnJokes Logo"}
                        className={"logo"}
                    />
                    <div className={"mobile drawer-menu"} onClick={()=>toggleShowDrawer()}>
                        {showDrawer?<FaTimes/>:<FaBars/>}
                    </div>


                </div>
                <div className={"home-container"}>
                    <div className={`grid-item ${showUser?"grid-item-user":""}`}>
                        <User/>
                    </div>
                    <div className={"grid-item grid-item-feed"}>
                        <Feed/>
                    </div>
                    <div className={"grid-item grid-item-category"}>
                        <Categories/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;