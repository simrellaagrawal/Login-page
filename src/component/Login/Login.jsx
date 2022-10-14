import { Link, TextField} from "@mui/material";
import React from "react";
import "./login.css";
import Button from "@mui/material/Button";
const Login = () => {
  return (
    <html>
      <head></head>
      <body>
        <section className="section">
          <div className="imgbx">
            <img
              src="https://www.techscrolling.com/wp-content/uploads/2017/10/Cyber-Security-Approach.jpg"
              alt="pic"
            ></img>
          </div>
          <div className="contentBx">
            <div className="formbx">
              <div className="login">
                <h3> Login</h3>
              </div>
              <h6>Please sign in to continue</h6>
              <form>
                <div className="inputbx">
                  <div className="details">
                    <TextField
                      className="data"
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                    />
                  </div>
                  <div className="details">
                    <TextField
                      className="data"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                    />
                  </div>
                  <div className="remember">
                    <label>
                      <input type="checkbox" />
                      Remember me?
                    </label>
                  </div>
                  <div className="bttn">
                    <Button
                      variant="contained"
                      className="button"
                      color="primary"
                    >
                      Login
                    </Button>
                  </div>
                  <div className="last">
                    <p>
                      Don't have an account? <Link>Sign up</Link>{" "}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};
export default Login;
