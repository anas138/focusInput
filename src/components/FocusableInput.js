import React,{useEffect} from 'react'
import TextInput from './TextInput'

function FocusableInput(props) {
    const {focus} = props
    const ref = React.createRef()
    useEffect(()=>{
        if(focus===true){
            ref.current.focus()
        }
               
    },[focus])
    console.log(focus,"props")
  return (
    <div>
        <TextInput ref={ref} placeholder={"Text Input"}/>
    </div>
  )
}

export default FocusableInput