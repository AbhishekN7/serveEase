import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProOnly({ element }) {
  const navigate = useNavigate();
  const { login, proLogin } = useSelector((state) => state.login);
  return login && login.name && proLogin ? (
    element
  ) : (
    <>
      <div className="container">
        <div className="auth-only">
          <h2 className="text-light">Unautherized Access</h2>
          <button
            className="button"
            onClick={(e) => {
              navigate("/login/professional");
            }}
          >
            Login With Professional Account
          </button>
        </div>
      </div>
    </>
  );
}
