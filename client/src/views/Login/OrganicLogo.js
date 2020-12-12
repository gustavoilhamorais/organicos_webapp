import React from 'react'

export default function OrganicLogo() {
  return (
    <img
      className="organic-login-logo"
      src={process.env.REACT_APP_ORGANIC_OS_LOGO}
      alt="Organic OS"
      width="130"
    />
  )
}
