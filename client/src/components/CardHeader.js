import React from 'react';

export default function CardHeader({ children, textColor = "primary" }) {
  return (
    <div className="card-header">
      <h1 className={`text-${textColor}`}>
        {children}
      </h1>
    </div>
  )
}
