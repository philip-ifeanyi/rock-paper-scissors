import React from 'react'

import { settings } from '../../configs/game'
import "./Computer.css"

const Computer = ({
  pcScore,
  pcSelection,
  userselection,
  rockIcon,
  scissorsIcon,
  paperIcon,
  trophyIcon
}) => {
  return (
    <div className="computer-card">
      <h1>Computer</h1>
      {pcScore < settings.winTarget ? (
        userselection === "" ? (
          <h3 className="waiting-message">
            {settings.waitingMessage}
          </h3>
        ) : (
          <>
            <img
              src={
                pcSelection === "Rock"
                  ? rockIcon
                  :pcSelection === "Paper"
                  ? paperIcon
                  :scissorsIcon
              }
              alt="icon"
            />
            <h3>PC Selected: {pcSelection}</h3>
          </>
        )
      ):(
        <>
          <img src={trophyIcon} alt="trophy" />
          <h3>Victory</h3>
        </>
      )}
    </div>
  );
};

export default Computer