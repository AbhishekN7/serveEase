import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import PagenotFound from "./pages/PagenotFound";
import AddService from "./pages/professional/AddService";
import ProDashboard from "./pages/professional/ProDashboard";
import ProLogin from "./pages/professional/ProLogin";
import ProRegister from "./pages/professional/ProRegister";
import ProOnly from "./pages/ProOnly";
import Bookings from "./pages/user/Bookings";
import Details from "./pages/user/Details";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserDashboard from "./pages/user/UserDashboard";
import UserOnly from "./pages/UserOnly";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/user" element={<Register />} />
        <Route path="/register/professional" element={<ProRegister />} />
        <Route path="/login/professional" element={<ProLogin />} />
        <Route
          path="/user/dashboard"
          element={<UserOnly element={<UserDashboard />} />}
        />
        <Route
          path="/pro/dashboard"
          element={<ProOnly element={<ProDashboard />} />}
        />
        <Route path="/details" element={<UserOnly element={<Details />} />} />
        <Route path="/login/user" element={<Login />} />
        <Route
          path="/pro/add-service"
          element={<ProOnly element={<AddService />} />}
        />
        <Route path="*" element={<PagenotFound />} />
        <Route
          path="/user/account"
          element={<UserOnly element={<Account />} />}
        />
        <Route
          path="/user/bookings"
          element={<UserOnly element={<Bookings />} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
