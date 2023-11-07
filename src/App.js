import React, { useEffect, useContext } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Create from "./Pages/Create";
import Login from "./Pages/Login";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { AuthContext, FirebaseContext } from "./store/Context";
import View from "./Pages/ViewPost";
import Post from "./store/PostContext";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  
  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
            <Route path="/create">
              <Create />
            </Route>
          <Route path="/view">
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
