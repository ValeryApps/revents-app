import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react';
import { decrementAction, incrementAction} from './testReducer';

const Sandbox = () => {
   const {data} = useSelector(state=>state);
   const dispatch = useDispatch();
   return (
      <div>
         <h1>This is a test</h1>
         <h3>Data is: {data}</h3>
         <Button content="Increment" color="green" onClick={()=>{
         dispatch(incrementAction(10))
         }}/>
         <Button content="Decrement" color="red" onClick={()=>{
         dispatch(decrementAction(5))
         }}/>
      </div>
   )
}

export default Sandbox
