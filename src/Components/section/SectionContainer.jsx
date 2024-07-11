import React from 'react'

const SectionContainer = ({ idName, className, children }) => {
  return (
    <>
      <section className={className} id={idName ? idName : ''}>
        {children}
      </section>
    </>
  )
}

export default SectionContainer
