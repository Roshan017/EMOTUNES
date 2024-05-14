import React, { useState } from "react";
import axios from "axios";
import * as Components from "../components/login-comp";

function Login() {
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name.charAt(0).toUpperCase() + name.slice(1)]: value, // Capitalize the first letter
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/Login", values)
      .then((response) => {
        // Handle successful response
        console.log("Response:", response.data);
        // Optionally, reset form values or perform any other actions
        setValues({ Name: "", Email: "", Password: "" });
      })
      .catch((error) => {
        // Handle error
        if (error.response) {
          // Server responded with a status code outside the range of 2xx
          console.error("Server Error:", error.response.data);
        } else if (error.request) {
          // Request made but no response received
          console.error("No Response:", error.request);
        } else {
          // Something else happened while setting up the request
          console.error("Request Error:", error.message);
        }
      });
  };

  const [signIn, toggle] = React.useState(true);
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
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form action="" method="POST" onSubmit={handleSubmit}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handleChange}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={handleChange}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="Password"
              onChange={handleChange}
            />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="http://localhost:3000/Forgotpwd">
              Forgot your password?
            </Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
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
