import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseTextSize, increaseTextSize } from '../Feature/TextSize';

const ChangeTextSize = () => {
   const dispatch = useDispatch();

      return (
    <div>
        <button onClick={()=> dispatch(increaseTextSize(1))}>Increase Text Size</button>
        <button onClick={()=> dispatch(decreaseTextSize(1))}>Decrease Text Size</button>
    </div>
  )
}

export default ChangeTextSize