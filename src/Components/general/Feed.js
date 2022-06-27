import React, {useEffect, useId, useState} from "react";
import FeedItem from "./FeedItem";
import Services from "../../Services/Services";
import moment from "moment";
import {BsFilter} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {BiRefresh, BiSave} from "react-icons/bi";
import {resetCurrentFeed, setCategory, setCurrentFeed, setMyJokes} from "../../Store/Actions";
import {RiCloseCircleLine} from "react-icons/ri";

const Feed=()=>{
    const services=new Services(this);
    const jokeId=useId();
    const [update,setUpdate]=useState(false);
    const category=useSelector(state => state.CategoryState)
    const currentFeed=useSelector(state => state.CurrentFeed)
    const dispatch=useDispatch();

    const getJokes=(cat)=>{
        let i=0
        const url=cat==="all"?"https://api.chucknorris.io/jokes/random":`https://api.chucknorris.io/jokes/random?category=${category}`
        while (i<10){
            services.getItem(url)
                .then((res)=>{
                    dispatch(setCurrentFeed(res.data))
                }).catch(e=>{
                console.warn(e)
            })
            i++
        }
    }

    useEffect(()=>{
        dispatch(resetCurrentFeed())
        getJokes(category)
    },[update,category])

    const onSaveJokes=()=> {
        let myJokes={
            name:category? `${category} Jokes`:moment(new Date()).format("MMM-DD-YYYY"),
            jokes:[...currentFeed],
        }
        dispatch(setMyJokes(myJokes))
    }

    return(
        <>
            <div>
                <div className={"feed-heading"}>
                    <h5>Feed</h5>
                    <div className={"feed-heading"}>
                        <p><BsFilter/><span> {category==="all"?"No Filters":category}</span></p>
                        {category!=="all"&&<RiCloseCircleLine onClick={()=>dispatch(setCategory("all"))} className={"close-btn"}/>}
                        <button onClick={()=>setUpdate(!update)} className={"btn-light"}><BiRefresh/> Reload</button>
                        <button onClick={()=>onSaveJokes()} className={"btn-light"}><BiSave/> Save Feed</button>
                    </div>
                </div>
                <div className={"feed"}>
                    {(currentFeed||[]).map((joke,index)=>
                        <FeedItem key={`${jokeId}-${index}-${joke.id}`}>
                            {joke.value}
                            {joke.created_at}
                            {joke.updated_at}
                            {joke.categories}
                        </FeedItem>
                    )}
                </div>
            </div>
        </>
    )
}
export default Feed;