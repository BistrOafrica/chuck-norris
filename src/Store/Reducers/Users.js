
const Users=(state= [],action)=>{
    switch (action.type) {
        case "SET_USERS":
            return [...state,action.user]
        default:
            return state
    }
}
export default Users;