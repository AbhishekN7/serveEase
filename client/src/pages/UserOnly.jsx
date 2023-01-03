import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserOnly({ element }) {
  const navigate = useNavigate();
  const { login, userLogin } = useSelector((state) => state.login);
  if (login && login.name && userLogin) {
    return element;
  } else {
    return (
      <>
        <div className="auth-only">
          <div className="container">
            <h2 className="text-light">Unautherized Access</h2>
            <button
              className="button"
              onClick={(e) => {
                navigate("/login/user");
              }}
            >
              Login with User Account
            </button>
          </div>
        </div>
      </>
    );
  }
}
