
const CurrentFeed=(state=[],action)=>{
    switch (action.type) {
        case "SET_CURRENT_FEED": {
            let myJokes = [...state, action.joke]
            return myJokes
        }
        case "REPLACE_CURRENT_FEED": {
            let mySavedJokes = [...action.jokes]
            return mySavedJokes
        }
        case "RESET_CURRENT_FEED": {
            let feed = []
            return feed
        }
        default:
            return state
    }
}
export default CurrentFeed;