import React from 'react'

const LabelInput = ({
  inputId,
  inputName,
  inputType = 'text',
  maxNumber,
  minNumber,
  needed
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
        />
      </div>
    </>
  )
}

export default LabelInput
