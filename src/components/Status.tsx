import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
const Status = (props: StatusProps) => {
    let message
    if(props.status == 'loading'){
        message = 'is loading message'
    }
    if(props.status == 'success'){
        message = 'successfully loaded message'
    }
    if(props.status == 'error'){
        message = 'error loading message'
    }
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}

export default Status