import React from 'react'

const InfoResult = ({
  numberDiv,
  arrayParrafs,
  idName,
  className,
  title = '',
  children
}) => {
  return (
    <>
      <article id={idName} className={className}>
        {title && <h3>{title}</h3>}
        {Array.from({ length: numberDiv }, (v, i) => (
          <div key={i}>
            <p>{arrayParrafs[i]}</p>
          </div>
        ))}
        {children}
      </article>
    </>
  )
}

export default InfoResult
