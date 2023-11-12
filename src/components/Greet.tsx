import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number, //making prop attribute optional with ?
    isLoggedIn: boolean
}

function Greet({name, messageCount=0, isLoggedIn}: GreetProps) {
  return (
    <div>
        {isLoggedIn ? (<h2>Welcome {name}! You have {messageCount} unread messages</h2>) : (<h2>Welcome guest</h2>)}
    </div>
  )
}

export default Greet