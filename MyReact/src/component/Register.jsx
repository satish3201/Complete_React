import React from 'react'

const Register = () => {

  const handleSubmit = (formData) =>{
    const name = formData.get('name')
    alert(`You Form Submitted : ${name}`)
  }

  return (
    <div>
        <form action={handleSubmit}>
          <input type="text" name='name' placeholder='name' /> <br /> <br />
          <input type="number" name='number' placeholder='number' /> <br /> <br />
           <input type="email" name='email' placeholder='email' /> <br /> <br />
          <input type="password" name='password' placeholder='password' /> <br /> <br />

          <button type='submit'>submit</button>
        </form> 
    </div>
  )
}

export default Register
