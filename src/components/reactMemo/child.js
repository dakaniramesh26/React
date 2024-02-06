import React from 'react'

const Child = () => {
    console.log("Child re-rendering")
  return (
    <div>childeren conmponent</div>
  )
}

export default React.memo(Child)