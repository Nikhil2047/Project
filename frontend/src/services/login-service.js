import axios from "axios"

export const loginHandler = async(number,password,login) =>{
    try {
        const {data: {token,username}} = await axios.post("https://travel-app-backend-bm5e.onrender.com/api/auth/login",
            {
                number:number,
                password:password
            }
        )
        login(token,username)
        return {accessToken: token,username};
    } catch (error) {
        console.log("user not found")
        throw error;
    }
}