import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {replaceCurrentFeed, resetCurrentFeed} from "../../Store/Actions";

const MyJokes=()=>{
    const myJokes = useSelector((state)=>state.MyJokes)
    const dispatch=useDispatch();
    const onViewSaved=(jokes)=>{
        dispatch(resetCurrentFeed())
        dispatch(replaceCurrentFeed(jokes.jokes))
    }
    return(
        <>
            <div className={"my-jokes"}>
                <p><span>My Jokes</span></p>
                {(myJokes||[]).map((jokes,index)=>
                    <p key={index} className={"cat-names"} onClick={()=>onViewSaved(jokes)}>{jokes.name}</p>
                )}
            </div>
        </>
    )
}
export default MyJokes;