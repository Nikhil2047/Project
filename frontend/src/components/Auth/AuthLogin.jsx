import React from 'react'
import "./Auth.css"
import { validateNumber,validatePassword } from '../../utils';
import {loginHandler} from "../../services";
import { useAlert, useAuth } from '../../Context';

let isNumberValid,isPasswordValid;

export const AuthLogin = () => {

    const {number,password,authDispatch,token,login} = useAuth();
    const {setAlert} = useAlert();

    const handleNumberChange = (event) =>{
            isNumberValid = validateNumber(event.target.value);
            if(isNumberValid){
                console.log("valid input")
                authDispatch({
                type: "NUMBER",
                payload: event.target.value
            })
            }else{
                console.log("Invalid Number")
            }
        }
    
    const handlePasswordChange = (event) =>{
            isPasswordValid = validatePassword(event.target.value);
            if(isPasswordValid){
                console.log("valid input")
                authDispatch({
                type: "PASSWORD",
                payload: event.target.value
            })
            }else{
                console.log("Invalid password")
            }
        }
    
    const handleFormSubmit = async(event) =>{
            event.preventDefault()
            if(isNumberValid && isPasswordValid){
                const {token,username} =  await loginHandler(number,password,login);
                authDispatch({
                    type:"SET_ACCESS_TOKEN",
                    payload: token
                })
                if(token){
                    setAlert({
                    open: true,
                    message: "Logged in successfully",
                    type: "success"
                })
                }
                authDispatch({
                    type:"SET_USER_NAME",
                    payload: username
                })
            }
            authDispatch({
                type:"CLEAR_USER_DATA"
            })
            authDispatch({
                type:"SHOW_AUTH_MODAL"
            })
        }


    const handleTestCredentialsClick = async() =>{
        const {token,username} =  await loginHandler(9526853695,"Yash@1234",login);
                authDispatch({
                    type:"SET_ACCESS_TOKEN",
                    payload: token
                })
                authDispatch({
                    type:"SET_USER_NAME",
                    payload: username
                })
                authDispatch({
                type:"CLEAR_USER_DATA"
                })
                authDispatch({
                    type:"SHOW_AUTH_MODAL"
                })
    }

  return (
    <div className='auth-container'>
        <form onSubmit={handleFormSubmit}>
            <div className='lb-in-container'>
                <label className='auth-label'>Mobile Number <span className='asterisk'>*</span></label>
                <input className='auth-input' type='number' defaultValue={number} placeholder='Enter Mobile Number' onChange={handleNumberChange} required/>
            </div>
            <div className='lb-in-container'>
                <label className='auth-label'>Password <span className='asterisk'>*</span></label>
                <input className='auth-input' type='password' defaultValue={password} placeholder='Enter the password' onChange={handlePasswordChange} required/>
            </div>
            <div>
                <button className='button btn-primary btn-login'>Login</button>
            </div>
        </form>
        <div className='cta'>
            <button className='button btn-outline-primary' onClick={handleTestCredentialsClick}>Login with test credentials</button>
        </div>
        <label className='or-container'>
            <span>----------------  or  -----------------</span>
        </label>
        <div className='cta'>
            <button className='button btn-primary btn-login-2'>Login with Gmail</button>
        </div>
    </div>
  )
}

export default AuthLogin