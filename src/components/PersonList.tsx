import React from 'react'
import { Name } from './Person.types'

// type PersonListProps = {
//     names: {
//         firstName: string,
//         lastName: string
//     }[]
// }

type PersonListProps = {
  names: Name[]
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