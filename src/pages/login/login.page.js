import React, { useState } from 'react';
import { api } from '../../utils';

import './login.style.css';

function Login({ setHasUser }) {

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  function handleOnChange({ target }) {
    setInputs({
      ...inputs,
      [target.type]: target.value,
    });
  };

  async function handleOnClick(event) {
    event.preventDefault();
    try {
      const response = await api.post('/tokens',
        {
          username: inputs.email,
          password: inputs.password,
        }
      )
      setHasUser(true);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <form className="login">
      <h2 className="login__title">Login</h2>
      <input
        type="email"
        placeholder="username"
        autoComplete="username"
        className="login__input"
        value={inputs.email}
        onChange={handleOnChange}
      />
      <input
        type="password"
        placeholder="password"
        autoComplete="current-password"
        className="login__input"
        onChange={handleOnChange}
      />
      <button className="login__button" onClick={handleOnClick}>Sign in</button>
    </form>
  )
}

export default Login;