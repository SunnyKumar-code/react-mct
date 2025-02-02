import React from 'react'

export default function Cell({ filled, onClick, isDisabled }) {
  return (
    <button
      type="button" 
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  )
}
