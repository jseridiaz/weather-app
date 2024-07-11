import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ textBtn, anchor = false, typeButton = '', className }) => {
  return !anchor ? (
    <button type={typeButton} className={className}>
      {textBtn}
    </button>
  ) : (
    <button className={className}>
      <Link to={`/${textBtn.toLowerCase().split(' ')[0]}`}>{textBtn}</Link>
    </button>
  )
}

export default Button
