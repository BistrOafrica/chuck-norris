import axios from 'axios';

class Services {

    constructor() {

    }
    getList=async(url)=>{
        return await axios.get(url)
    }
    getItem=async(url)=>{
        return await axios.get(url)
    }
    loginUser=async(user,users)=>{
        try {
            const instance=users.find(obj=>obj.username===user.username)
            if (instance.password===user.password){
                return {
                    status:200,
                    msg:"found",
                    user:{...instance}
                }
            }else{
                return {
                    status:401,
                    msg:"Incorrect username or password"
                }
            }
        }catch (e) {
            console.warn(e)
            return {
                status:404,
                msg:"User Not Found"
            }
        }
    }


}
export const icon ="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
export default Services;