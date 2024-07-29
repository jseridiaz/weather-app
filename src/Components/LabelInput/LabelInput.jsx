import React from 'react'

const LabelInput = ({
  inputId,
  inputName,
  inputType = 'text',
  maxNumber,
  minNumber,
  needed,
  reference
}) => {
  return (
    <>
      <div>
        <label htmlFor={inputId}>{inputName}</label>
        <input
          type={inputType}
          id={inputId}
          max={maxNumber}
          min={minNumber}
          required={needed ? true : false}
          ref={reference}
        />
      </div>
    </>
  )
}

export default LabelInput
