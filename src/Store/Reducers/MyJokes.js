
const MyJokes=(state=[],action)=>{
    switch (action.type) {
        case "SET_MY_JOKES": {
            let myJokes = [...state, action.jokes]
            return myJokes
        }
        default:
            return state
    }
}
export default MyJokes;