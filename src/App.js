import React,{useState} from "react";
// import axios from "axios";
import Child from "./components/Child"
import Axios from "axios";
const App=()=>{
  const[value,setValue]=useState(0)
  const[message,setMessage]=useState()
  const onHandleClick=()=>{

  setValue((prevState)=>prevState+1)
  // getMessage()
  sendData()
  
  }
//  const getMessage=async()=>{
//       const res=await Axios.get("http://localhost:5005/api")
//       const data=res.data.message
//       setMessage(data)
//       console.log(data)

  // }
  const sendData=async()=>{
    const options={method:"post",
                body:{
                  value
                }}
    const res=await Axios("http://localhost:5005/data",options)
    setMessage(res.config.body.value)

  }
  
  return (
    <div>
      <p>you send the data to the back end to front end:{message}</p>
    
     <Child onHandleClick={onHandleClick}/>
   
    </div>
  )
}


export default App;
