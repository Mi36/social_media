import React from "react";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div>
        <GoogleLogin
          clientId=""
          render={(renderProps) => {
            return (
              <button type="button">
                <FcGoogle />
                Signin with google
              </button>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Login;
