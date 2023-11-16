import React from 'react'

type InputProps  = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
  return (
    <div>
        <input onChange={(e) => props.handleChange(e)}/>
    </div>
  )
}

export default Input