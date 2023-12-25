import React from 'react'

const Button = (props) => {
  console.log(props)
  const {children} = props
  return (
    <button>Button</button>
  )
}

export default Button