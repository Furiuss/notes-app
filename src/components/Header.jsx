import React from 'react'

export const Header = ({handleToggleDarkMode}) => {
  return (
    <div>
      <div className="header">
        <h1>Notes</h1>
        <button onClick={handleToggleDarkMode} className="save-btn">Toggle Mode</button>
      </div>
    </div>
  )
}
