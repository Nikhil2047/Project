import axios from "axios"

export const signupHandler = async(username,number,email,password) =>{
    try {
        const data = await axios.post("https://travel-app-backend-bm5e.onrender.com/api/auth/register",
            {
                username:username,
                email:email,
                password:password,
                number:number,
            }
        );
        console.log(data)
    } catch (error) {
        console.log("error adding user to database")
    }
}