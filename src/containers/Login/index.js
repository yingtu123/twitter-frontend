import { useState } from 'react';
import './index.css';

const Login = ()=>{

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const clickHandler =() => {
    alert('Login Successful');
    // redirect to dashboard page or any other page
  }

  const onChangeNameHandler = (e) => {
    setName(e.target.value);

  }

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);

  }

  return (
    <div className="login">
        <div>Username: <input onChange={onChangeNameHandler}/></div>
        <div>Password: <input type='password' onChange={onChangePasswordHandler}/></div>
        <div><button onClick={clickHandler}>Login</button></div>
      
    </div>
  );
}
export default Login;

