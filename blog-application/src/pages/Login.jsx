import React from 'react'
import { useState } from 'react'

function Login(isLoggedIn) {

    const [count, setCount] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const [isVisible, setIsVisible] = useState(false);


    const numbers = [1, 2, 3, 4, 5];

    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
    ];


    // const [email,. setEmail] = useState('');
    // const handleCountUsers = () => {
    //     setCount(count + 1);
    // }

    // const handleEmailUser = () => {
    //     setEmail(email);
    //     setCount(count + 1);
    // }


    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


    const handleSubmitForm = () => {

        if(emailRegex.test(!email)) {
            alert("Please enter valid email address");
        }

        if(email === "avinash@gmail.com" && password == "Avinash@123") {
            alert('Login Successfull');
        }
    }


    if (!isLoggedIn) {
        return (
            <div>
                Home Page
            </div>
        )
    }


    const handleVisibilty = () => {
        setIsVisible(!isVisible);
    }



  return (
    <div>
        <h1>Login Page</h1>

        <form onSubmit={handleSubmitForm}>
            <div>
                <label htmlFor="email">Email</label><br/>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br/>
            </div>
            <br/>
            <div>
                <label htmlFor="password">Password</label><br/>
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br/>
            </div>
            <br/>

            <button type='submit'>
                {
                    email == "" || password == "" ? 'Enter Email' : 'Submit'
                }
            </button>
        </form>

        {/* <button onClick={handleEmailUser}>
            Login
        </button> */}

        {/* <div>
            <h1>Welcome user, {email}</h1>
            <h1>Welcome user, {password}</h1>
            <h1>Welcome user, {phonenumber}</h1>
        </div> */}


        <button onClick={handleVisibilty}>
            {
                isVisible ? 'Hide' : 'Show'
            }
        </button>

        {
            isVisible && (
                <p>Hello I am Avinash</p>
            )
        }


        <div>
            {/* {
               numbers.map((num, index) => {
                return (
                    <>
                        <h1 key={index}>{num * 2}</h1>
                    </>
                    

                )
               })
            } */} 

            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.id} {item.name}</h1>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Login