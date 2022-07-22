import "./Choice.css"

import React from 'react'



const Choice = ({value, choiceIcon, onClick}) => {
  return (
    <div value={value} onClick={onClick}>
      <img src={choiceIcon} className="choice-icon"  alt="icon" />
    </div>
  )
}

export default Choice