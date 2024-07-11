const Img = ({ src, alt, className }) => {
  return (
    <>
      <div className={className}>
        <img src={src} alt={alt} loading='lazy' />
      </div>
    </>
  )
}
export default Img
