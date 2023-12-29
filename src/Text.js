import React from 'react'

const Text = (props) => {
    const {children} = props
  return (
    <div className='textanimation'>{children}</div>
  )
}

export default Text