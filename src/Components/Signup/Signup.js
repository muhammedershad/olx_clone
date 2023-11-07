import React, { useContext, useState } from "react";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/Context";
import { useHistory, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(email.trim().length === 0 || password.trim().length < 7 || phone.trim().length !== 10){
      Swal.fire({
        icon: 'error',
        text: 'Please provide a valid email address. Ensure that your password contains at least 6 characters, which can be letters, numbers, or a combination of both. Also, make sure your phone number consists of 10 digits.',
      })
      return
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username })
        .then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username,
              phone,
            })
            .then(() => {
              history.push("/login");
            });
        });
      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          text: error.message,
        })
      })
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
