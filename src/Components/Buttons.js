import React from 'react'

const Buttons = ({onClick, children}) => {
  return (
    <div>
     <button onClick={onClick}>
     {children}
     </button>
    </div>
  )
}

export default Buttons;