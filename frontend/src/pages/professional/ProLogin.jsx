import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginPro } from "../../reduxToolkit/slices/authSlice";

export default function ProLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login, proLogin } = useSelector((state) => state.login);
  const [loginData, setLoginData] = useState({
    email: "john@gmail.com",
    password: "123",
  });

  const LoginPro = () => {
    dispatch(loginPro(loginData));
  };

  useEffect(() => {
    if (login && login.name && proLogin) {
      navigate("/pro/add-service");
    }
  }, [login]);

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card  my-3 cardColor">
              <div class="card-header cardHeader">
                <h4 className="text-center">Professional Login</h4>
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
                <button className="w-100 mt-3 button" onClick={LoginPro}>
                  Login
                </button>
                <p className="text-center mt-3 ">
                  Dont Have Account?{" "}
                  <Link
                    to="/register/professional"
                    className="text-decoration-none"
                  >
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
