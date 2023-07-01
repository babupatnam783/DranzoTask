
const Child=(props)=>{
    const{onHandleClick}=props
  
  const onClickHandle=()=>{
    onHandleClick()
    
  }
  return (
    <div>
     <button type="button" onClick={onClickHandle}>Increase</button>
    </div>
  )
}


export default Child;