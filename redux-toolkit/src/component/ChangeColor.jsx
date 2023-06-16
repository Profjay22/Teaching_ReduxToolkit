import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../Feature/Theme';
const ChangeColor = () => {

    const dispatch = useDispatch();
    const [color, setColor] = useState('');
  return (
    <div>
     <input type= "text" value={color} onChange={(event)=>setColor(event.target.value)}/>
     <button onClick={()=> dispatch(changeColor(color))}>CHANGE COLOR</button>
     </div>
  )
}

export default ChangeColor