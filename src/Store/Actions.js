
export const setAuthState=()=>{
    return{
        type:"SET_AUTH_STATE"
    }
}

export const setUnAuthState=()=>{
    return{
        type:"SET_UN_AUTH_STATE"
    }
}
export const setUser=(user)=>{
    return{
        type:"SET_USER",
        user:{...user}
    }
}

export const unSetUser=()=>{
    return{
        type:"UN_SET_USER",
        user:{}
    }
}

export const setUsers=(user)=>{
    return{
        type:"SET_USERS",
        user:{...user}
    }
}

export const setCategory=(category)=>{
    return{
        type:"SET_CATEGORY_STATE",
        category
    }
}
export const setMyJokes=(jokes)=>{
    return{
        type:"SET_MY_JOKES",
        jokes
    }
}
export const setCurrentFeed=(joke)=>{
    return{
        type:"SET_CURRENT_FEED",
        joke
    }
}
export const replaceCurrentFeed=(jokes)=>{
    return{
        type:"REPLACE_CURRENT_FEED",
        jokes
    }
}
export const resetCurrentFeed=()=>{
    return{
        type:"RESET_CURRENT_FEED",
    }
}
