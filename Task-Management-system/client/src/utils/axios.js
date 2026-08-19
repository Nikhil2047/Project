import axios from "axios";

const instance = axios.create({
    baseURL:"https://task-manager-backend-f39k.onrender.com/api"
})

export default instance;