 import React, { Component } from "react";
 import axios from "axios";
 import { withRouter } from "react-router";
 import { Route, Switch } from "react-router-dom";
 import Auth from "../utils/Auth";
 // import Form from "./Form";
 import SignUp from './SignUp.js'
 import LogIn from './LogIn.js'

 class AuthForm extends Component {
   state = {
     username: "",
     passwordDigest: "",
      email: "",
      age: "",
      profilePic: ""
   };

   handleChange = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
   };

   registerUser = (e) => {

     debugger
     e.preventDefault();
     const { username, passwordDigest, email, age } = this.state;


     axios.post("/username/new", { username, passwordDigest, email, age });

     Auth.authenticateUser(username);
     console.log(username);

      axios.post("/username/login", { username, passwordDigest });

      this.props.checkAuthenticateStatus();

     // this.setState({
     //   username: "",
     //   password: "",
}
     // });

   loginUser = e => {
     e.preventDefault();
     const { username, password } = this.state;

     axios
       .post("/username/login", { username, password })
       .then(() => {

         Auth.authenticateUser(username);
       })
       .then(() => {
         this.props.checkAuthenticateStatus();
      })
       .then(() => {
        this.setState({
           username: "",
           password: ""
         });
       });
  };

   render() {
     const { username, passwordDigest, email, age, profilePic } = this.state;
     const { isLoggedIn } = this.props;
     return (
       <Switch>
         <Route
           path="/auth/login"
           render={() => {
             return (
               <LogIn
                 username={username}
                 passwordDigest={passwordDigest}
                 isLoggedIn={isLoggedIn}
                 loginUser={this.loginUser}
                registerUser={this.registerUser}
                 handleChange={this.handleChange}
               />
             );
           }}
         />
         <Route
          path="/auth/register"
           render={() => {
            return (
               <SignUp
                username={username}
                passwordDigest={passwordDigest}
                email={email}
                age={age}
                profilePic={profilePic}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
               />
           );
          }}
         />
      </Switch>
     );
   }
 }

 export default AuthForm;
