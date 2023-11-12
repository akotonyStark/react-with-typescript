import React from 'react'

type PersonListProps = {
    names: {
        firstName: string,
        lastName: string
    }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {props.names.map((name, idx) => {
            return <h2 key={idx}>{name.firstName} {name.lastName}</h2>
        })}
    </div>
  )
}

export default PersonList