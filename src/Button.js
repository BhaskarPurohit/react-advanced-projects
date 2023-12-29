import React, {memo} from 'react'

const Button = memo( (props) => {
  console.log("rendering button")
  const {children, clickAction, data} = props
  const handleClick = ()=>{
    console.log("click inside component");
    clickAction?.()
  }
  return (
    <button onClick={handleClick}>{children}
    {data?.a?.b?.c}
    </button>
  )
})

export default Button