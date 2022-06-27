
const User=(state= {},action)=>{
    switch (action.type) {
        case "SET_USER":
            return action.user
        case "UN_SET_USER": {
            let user = action.user
            return user
        }
        default:
            return state
    }
}
export default User;