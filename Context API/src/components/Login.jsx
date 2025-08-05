import React, { useState,  } from 'react'
import UserContextProvider from '../Context/UserContextProvider';

const Login = () => {
const {UserNmae, setUserNmae} = useState('');
const [Password, setPassword] = useState('')

const {seData} = UserContextProvider(UserContextProvider)

const handelSubmit =  (e) => {
  e.preventDefault()
  seData({UserNmae, Password})

}

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='UserNmae'
      value={UserNmae}
      onChange={(e) => setUserNmae(e.target.value)}
      />
      <input type="Password" placeholder='Password'
      value={Password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
