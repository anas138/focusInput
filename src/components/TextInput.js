import React from 'react'

const TextInput = React.forwardRef((props, ref)=> (
    <input name="input" placeholder={props.placeholder} ref={ref}></input>
))
 

export default TextInput