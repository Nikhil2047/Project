import React from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { setUser } from '../../../slices/user'

const Navbar = () => {
  const user = useSelector((state)=>state.userInfo.user)
  let token = localStorage.getItem("token")
  const dispatch = useDispatch();
  
  const logout = ()=>{
    localStorage.removeItem("token");
    dispatch(setUser(null))

  }
  return (
    <div className='navbar'>
        <h1>Task Manager</h1>
        <div className='nav'>
          <Link to="/">Home</Link>
         { user?.userType === 3 ? <Link to={`/project/${user.pId}`}>Project</Link> :  <Link to="/projects">Projects</Link> }
          {
            !user || !token ? <Link to="/auth">Login</Link> :<Link onClick={logout}>Logout</Link>
          }
        </div>
    </div>
  )
}

export default Navbar