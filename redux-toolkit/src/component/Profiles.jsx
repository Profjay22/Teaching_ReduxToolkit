import React from 'react'
import { useSelector } from 'react-redux'


const Profiles = () => {
    const user = useSelector((state) => state.user.value)
    const color = useSelector((state)=> state.theme.value)
    const fontSize = useSelector((state)=> state.textSize.value);
    const myComponentStyle = {
        color,
        fontSize
    }
  return (
    <div>
        <h1 style={myComponentStyle}>Profile Page</h1>
        <p style={myComponentStyle}>Name: {user.name}</p>
        <p style={myComponentStyle}>Age: {user.age}</p>
        <p style={myComponentStyle}>Email: {user.email}</p>
    </div>
  )
}

export default Profiles