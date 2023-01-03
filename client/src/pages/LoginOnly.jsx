import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginOnly({ element }) {
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.login);
  return login && login.name ? element : navigate("/");
}
