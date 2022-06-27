
const Auth=(state=false,action)=>{
    switch (action.type) {
        case "SET_AUTH_STATE": {
            let authStateTrue = true
            return authStateTrue
        }
        case "SET_UN_AUTH_STATE": {
            let authStateFalse = false
            return authStateFalse
        }
        default:
            return state
    }
}
export default Auth;