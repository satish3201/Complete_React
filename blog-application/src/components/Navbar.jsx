import React from 'react'

function Navbar({name}) {
  return (
    <div>
        <div>
            <h1>{name}</h1>
        </div>

        <div>
            <ul>
                <li>Our Story</li>
                <li>Blog</li>
                <li>Create Blog</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>

        
    </div>
  )
}

export default Navbar