import React, {useEffect, useId, useState} from "react";

//Services
import Services from "../../Services/Services";
import {useDispatch} from "react-redux";
import {setCategory} from "../../Store/Actions";
import MyJokes from "./MyJokes";


const Categories=()=>{
    const services=new Services(this)
    const [categories,setCategories]=useState([])
    const catId=useId();
    const dispatch=useDispatch();

    useEffect(()=>{
        services.getList("https://api.chucknorris.io/jokes/categories")
            .then((res)=>{
                setCategories(res.data)
            }).catch((err)=>{
            console.warn(err)
        })
    },[])
    return(
        <>
            <div>
                <h5>Categories</h5>
                {(categories||[]).map((item,index)=>
                    <p onClick={()=>dispatch(setCategory(item))} className={"cat-names"} key={`${catId}-${index}`}>{item}</p>
                )}
            </div>
            <div className={"mobile"}>
                <MyJokes/>
            </div>
        </>
    )
}
export default Categories;