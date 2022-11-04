import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../app.css";
import { logoutAction } from "../reduxToolkit/slices/authSlice";
export default function () {
  const { login, userLogin } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navClass py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong className="navBrand">
              <i class="bi bi-box-seam-fill"></i>ServeEase
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbarClass"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/user/dashboard">
                User Dashboard
              </Link>
              <Link className="nav-link" to="/user/account">
                Account
              </Link>
              <Link className="nav-link" to="/pro/add-service">
                Add Service
              </Link>
              {login && login.name && (
                <>
                  {userLogin ? (
                    <>
                      <Link className="nav-link" to="/user/bookings">
                        Bookings
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link className="nav-link" to="/pro/dashboard">
                        Pro Dashboard
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>

            {login && login.name && (
              <div className="dropdown">
                <div>
                  <button
                    className="dropdown-toggle navDrop button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                  >
                    Welcome {login.name}
                  </button>
                  <ul class="dropdown-menu cardColor">
                    <li>
                      <Link class="dropdown-item" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/pro/add-service">
                        Add Service
                      </Link>
                    </li>
                    <li className="dropdown-item" onClick={logout}>
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
