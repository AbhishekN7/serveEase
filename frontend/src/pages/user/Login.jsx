import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { loginUser } from "../../reduxToolkit/slices/authSlice";
// import { handleLoginUser } from "../../redux/actions/userActions";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "john@gmail.com",
    password: "123",
  });
  const { login, userLogin, loginUserloading } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginUser = () => {
    dispatch(loginUser(loginData));
    console.log(loginData);
  };

  useEffect(() => {
    if (login && login.name && userLogin) {
      navigate("/user/account");
    }
  }, [login]);

  return (
    <div>
      <div class="container">
        {/* {login && login.name && !loginUserloading && (
          <h1>User Not Registered</h1>
        )} */}
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card cardColor  my-3">
              <div class="card-header">
                <h4 className="text-center">User Login</h4>
              </div>

              <div class="card-body">
                <div>
                  <label for="email" class="form-label">
                    <strong>First Email</strong>
                  </label>
                  <input
                    value={loginData.email}
                    type="text"
                    class="form-control cardInput"
                    id="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => {
                      setLoginData({ ...loginData, email: e.target.value });
                    }}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    class="form-control cardInput"
                    value={loginData.password}
                    id="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => {
                      setLoginData({ ...loginData, password: e.target.value });
                    }}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button className="w-100 mt-3 button" onClick={LoginUser}>
                  Login
                </button>
                <p class="text-center mt-3 ">
                  Dont Have Account?{" "}
                  <Link to="/register/user" className="text-decoration-none">
                    <strong>Create Account</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
