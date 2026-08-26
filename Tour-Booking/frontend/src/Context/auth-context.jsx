import { createContext, useContext, useReducer, useState } from "react"
import { authReducer } from "../Reducer";
import { Navigate } from "react-router";


const initialValue = {
    isAuthModalOpen : false,
    isDropDownModalOpen : false,
    username:"",
    email:"",
    password:"",
    number:"",
    name:"",
    confirmPassword:"",
    selectedTab:"login"
}

const AuthContext = createContext(initialValue);

const AuthProvider =({children})=>{


    const [{isAuthModalOpen,isDropDownModalOpen,username,email,password,number,name,confirmPassword,selectedTab}, authDispatch] = useReducer(authReducer,initialValue);

    const [token, setToken] = useState(() => localStorage.getItem("token") || "");


    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        if (!saved || saved === "undefined") return null;
        try {
            return JSON.parse(saved);
        } catch {
            return null;
        }
    });

    const [orderData, setOrderData] = useState(() => {
        const stored = localStorage.getItem("orderSummary");
        return stored ? JSON.parse(stored) : null;
    });

    const login = (token, userData) =>{
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setToken(token);
    }

    const logout = (token,userData,orderSummary) =>{
        localStorage.removeItem("token",token);
        localStorage.removeItem("user",userData);
        localStorage.removeItem("orderSummary",orderSummary)
        setUser(null);
        setToken("");
        setOrderData(null);
    }

    return(
        <AuthContext.Provider value={{user,orderData,token,isAuthModalOpen,isDropDownModalOpen,username,email,password,number,name,confirmPassword,selectedTab, authDispatch, setUser,login,logout,setToken,setOrderData}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider};