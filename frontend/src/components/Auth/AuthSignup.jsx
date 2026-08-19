import React from 'react'
import "./Auth.css"
import {useAuth} from "../../Context";
import { validateEmail,validateName,validateNumber,validatePassword } from '../../utils';
import {signupHandler} from "../../services"

let isNumberValid,isNameValid,isEmailValid,isPasswordValid,isComfirmPasswordValid

export const AuthSignup = () => {

    const {username,email,password,number,confirmPassword,authDispatch} = useAuth();
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

    const handleNameChange = (event) =>{
        isNameValid = validateName(event.target.value);
        if(isNameValid){
            console.log("valid input")
            authDispatch({
            type: "NAME",
            payload: event.target.value
        })
        }else{
            console.log("Invalid Name")
        }
    }

    const handleEmailChange = (event) =>{
        isEmailValid = validateEmail(event.target.value);
        if(isEmailValid){
            console.log("valid input")
            authDispatch({
            type: "EMAIL",
            payload: event.target.value
        })
        }else{
            console.log("Invalid Email")
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

    const handleConfirmPasswordChange = (event) =>{
        isComfirmPasswordValid = validatePassword(event.target.value);
        if(isComfirmPasswordValid){
            console.log("valid input")
            authDispatch({
            type: "CONFIRM_PASSWORD",
            payload: event.target.value
        })
        }else{
            console.log("Please enter the same password")
        }
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        if(isNumberValid && isNameValid && isEmailValid && isPasswordValid && isComfirmPasswordValid){
            signupHandler(username,number,email,password)
        }
        authDispatch({
            type:"CLEAR_USER_DATA"
        })
        authDispatch({
            type:"SET_TO_LOGIN"
        })
    }

  return (
    <div className='auth-container'>
        <form onSubmit={handleFormSubmit}>
            <div className='lb-in-container'>
                <label className='auth-label'>Mobile Number <span className='asterisk'>*</span></label>
                <input className='auth-input' type='number' maxLength="10" placeholder='Enter Mobile Number' defaultValue={number} required onChange={handleNumberChange}/>
            </div>
            <div className='lb-in-container'>
                <label className='auth-label'>Name <span className='asterisk'>*</span></label>
                <input className='auth-input' placeholder='Enter the name' defaultValue={username} required onChange={handleNameChange}/>
            </div>
            <div className='lb-in-container'>
                <label className='auth-label'>Email <span className='asterisk'>*</span></label>
                <input className='auth-input' type='email' placeholder='Enter the email' defaultValue={email} required onChange={handleEmailChange}/>
            </div>
            <div className='lb-in-container'>
                <label className='auth-label'>Password <span className='asterisk'>*</span></label>
                <input className='auth-input' type='password' placeholder='Enter the password' defaultValue={password} required onChange={handlePasswordChange}/>
            </div>
            <div className='lb-in-container'>
                <label className='auth-label'>Confirm Password <span className='asterisk'>*</span></label>
                <input className='auth-input' type='password' placeholder='Enter the password' defaultValue={confirmPassword} required onChange={handleConfirmPasswordChange}/>
            </div>
            <div className='cta'>
                <button className='button btn-primary btn-login'>SignUp</button>
            </div>
        </form>
    </div>
  )
}
