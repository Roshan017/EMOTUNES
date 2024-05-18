import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Components from "../components/login-comp";

function Login() {
  const history = useNavigate();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirm_Pwd, setCPassword] = useState("");
  const [isSignIn, toggle] = useState(true);

  async function SignUP_submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/Login", {
        Name,
        Email,
        Password,
        Confirm_Pwd,
      });
      if (res.data === "Exist") {
        alert("Email Already Exists");
      } else if (res.data === "NO") {
        alert("Passwords don't Match");
      } else {
        history("/Home", { state: { id: Name } });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function Login_submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/Login/signup", {
        Name,
        Password,
      });
      if (res.data === "Null") {
        alert("User Not Found");
      } else if (res.data === "Match") {
        history("/Home", { state: { id: Name } });
      } else if (res.data === "Invalid") {
        alert("Invalid Credentials");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Components.Container>
        <Components.SignUpContainer isSignIn={isSignIn}>
          <Components.Form action="POST">
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Components.Input
              type="password"
              placeholder="Confirm Password"
              name="password"
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
            <Components.Button onClick={SignUP_submit}>
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer isSignIn={isSignIn}>
          <Components.Form action="POST">
            <Components.Title>Login</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Components.Anchor href="http://localhost:3000/Forgotpwd">
              Forgot your password?
            </Components.Anchor>
            <Components.Button onClick={Login_submit}>Login</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer isSignIn={isSignIn}>
          <Components.Overlay isSignIn={isSignIn}>
            <Components.LeftOverlayPanel isSignIn={isSignIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel isSignIn={isSignIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Login;
