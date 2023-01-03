import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userRegister } from "../../reduxToolkit/slices/userSlice";
// import { handleRegisterAction } from "../redux/actions/userActions";

export default function Register() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "John",
    email: "john@gmail.com",
    mobile: 7998578656,
    city: "Delhi",
    password: "123",
  });

  const registerUser = (e) => {
    dispatch(userRegister({ ...userData }));
    e.preventDefault();
    console.log(userData);
  };

  return (
    <>
      {/* {JSON.stringify(userData)} */}
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card cardColor my-4">
              <div class="card-header cardHeader">
                <h3 className="text-center">Register User</h3>
              </div>
              <div class="card-body">
                <div>
                  <label for="email" class="form-label">
                    <strong>Enter Name</strong>
                  </label>
                  <input
                    type="text"
                    value={userData.name}
                    class="form-control my-2 cardInput"
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    id="name"
                    placeholder="Enter Your Name"
                  />

                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div>
                  <label for="email" class="form-label">
                    <strong>Enter Email</strong>
                  </label>
                  <input
                    value={userData.email}
                    type="text"
                    class="form-control cardInput"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div>
                  <label for="city" class="form-label">
                    <strong>Enter City</strong>
                  </label>
                  <input
                    value={userData.city}
                    type="text"
                    class="form-control cardInput"
                    onChange={(e) =>
                      setUserData({ ...userData, city: e.target.value })
                    }
                    id="city"
                    placeholder="Enter Your City"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div>
                  <label for="mobile" class="form-label">
                    <strong>Enter Mobile</strong>
                  </label>
                  <input
                    value={userData.mobile}
                    type="number"
                    class="form-control cardInput"
                    onChange={(e) =>
                      setUserData({ ...userData, mobile: e.target.value })
                    }
                    id="mobile"
                    placeholder="Enter Your Mobile Number"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">
                    <strong>Password</strong>
                  </label>
                  <input
                    value={userData.password}
                    type="password"
                    class="form-control cardInput"
                    id="password"
                    placeholder="Enter Your Password"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button
                  type="button"
                  className="button w-100 mt-3"
                  onClick={registerUser}
                >
                  Register
                </button>
                <p class="text-center mt-3">
                  Already Have Account?{" "}
                  <Link to="/login/user" className="text-decoration-none">
                    <strong>Sign in</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
