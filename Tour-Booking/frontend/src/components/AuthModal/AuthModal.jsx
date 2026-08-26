import { AuthSignup, AuthLogin} from "../index";
import "./AuthModal.css"
import { useAuth } from "../../Context";

export const AuthModal = () => {

    const {authDispatch, selectedTab} = useAuth();

    const handleLoginClick =()=>{
        authDispatch({
            type:"SET_TO_LOGIN"
        })
    }

    const handleSignupClick =()=>{
        authDispatch({
            type:"SET_TO_SIGNUP"
        })
    }

    const handleModalCloseClick =()=>{
        authDispatch({
            type:"SHOW_AUTH_MODAL"
        })
    }

  return (
    <div className="auth-modal-container">
        <div className="auth-modal">
            <div className="button-container">
                <button className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab === "login" ? "btn-auth-selected" : ""}`} onClick={handleLoginClick}>Login</button>
                <button className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab === "signup" ? "btn-auth-selected" : ""}`} onClick={handleSignupClick}>Signup</button>
                <button className="button btn-auth btn-auth-1 btn-close cursor-pointer" onClick={handleModalCloseClick}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            <div>
                {
                    selectedTab === "login" ? <AuthLogin/> : selectedTab === "signup" ? <AuthSignup/> : ""
                }
            </div>
        </div>
    </div>
  )
}

export default AuthModal