import React from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../Feature/User'
import { logout } from '../Feature/User'
const Login = () => {
    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=> {
            dispatch(login(
                {name: "Jeremiah", age: 22, email: "jeremiah22@gmail.com"}
            ))
        }}>Login</button>
        <button onClick={()=> dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login