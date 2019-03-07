// import React, { Component } from "react";
// import axios from "axios";
// import { withRouter } from "react-router";
// import { Route, Switch } from "react-router-dom";
// import Auth from "../components/utils/Auth";
// import Form from "./Form";
//
// class AuthForm extends Component {
//   state = {
//     username: "",
//     password: ""
//   };
//
//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//
//   registerUser = async e => {
//     e.preventDefault();
//     const { username, password } = this.state;
//
//     await axios.post("/username/new", { username, password });
//
//     Auth.authenticateUser(username);
//
//     await axios.post("/username/login", { username, password });
//
//     await this.props.checkAuthenticateStatus();
//
//     this.setState({
//       username: "",
//       password: ""
//     });
//
//   loginUser = e => {
//     e.preventDefault();
//     const { username, password } = this.state;
//
//     axios
//       .post("/username/login", { username, password })
//       .then(() => {
//         Auth.authenticateUser(username);
//       })
//       .then(() => {
//         this.props.checkAuthenticateStatus();
//       })
//       .then(() => {
//         this.setState({
//           username: "",
//           password: ""
//         });
//       });
//   };
//
//   render() {
//     const { username, password } = this.state;
//     const { isLoggedIn } = this.props;
//     return (
//       <Switch>
//         <Route
//           path="/auth/login"
//           render={() => {
//             return (
//               <Form
//                 username={username}
//                 password={password}
//                 isLoggedIn={isLoggedIn}
//                 loginUser={this.loginUser}
//                 registerUser={this.registerUser}
//                 handleChange={this.handleChange}
//               />
//             );
//           }}
//         />
//         <Route
//           path="/auth/register"
//           render={() => {
//             return (
//               <Form
//                 username={username}
//                 password={password}
//                 isLoggedIn={isLoggedIn}
//                 loginUser={this.loginUser}
//                 registerUser={this.registerUser}
//                 handleChange={this.handleChange}
//               />
//             );
//           }}
//         />
//       </Switch>
//     );
//   }
// }
//
// export default AuthForm;
