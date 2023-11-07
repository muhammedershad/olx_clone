import React from 'react';
import { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import {useHistory, Link} from 'react-router-dom'
import Swal from 'sweetalert2'

function Login() {
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() => {
      history.push('/');
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect username or password',
      })
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>
          <a>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
