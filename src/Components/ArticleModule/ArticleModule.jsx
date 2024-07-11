import React from 'react'
import Button from '../Button/Button'

const ArticleModule = ({
  className,
  idContainer,
  textH2,
  textP,
  buttonExist,
  textBtn,
  anchor
}) => {
  return (
    <article className={className} id={idContainer}>
      {textH2 && <h2>{textH2}</h2>}
      <p>{textP}</p>
      {buttonExist ? <Button textBtn={textBtn} anchor={anchor} /> : ''}
    </article>
  )
}
export default ArticleModule
