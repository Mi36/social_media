import React from "react";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/logo.png";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen ">
      <div className="relative w-full h-full">
        <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay ">
          <div className="p-5">
            <img src={Logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              render={(renderProps) => {
                return (
                  <button
                    type="button"
                    className="bg-mainColor cursor-pointer outline-none flex justify-center items-center rounded-lg p-3"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle />
                    Signin with google
                  </button>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
