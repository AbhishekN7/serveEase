import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getAllServices } from "../../../backend/controllers/serviceController";
// import { handleUserLogout } from "../redux/actions/userActions";

export default function Bookings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login, userLogin } = useSelector((state) => state.login);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  // const Userlogout = () => {
  //   dispatch(handleUserLogout());
  //   navigate("/login");
  // };

  const getAllServices = async () => {
    const {
      data: { result },
    } = await axios.get(
      `${process.env.REACT_APP_URL}/api/services/user/booked`
    );
    setServices(result);
  };

  useEffect(() => {
    if (!login.name && !userLogin) {
      navigate("/login/user");
    } else {
      getAllServices();
    }
  }, [login]);

  return (
    <>
      {JSON.stringify(search)}
      <div className="container">
        <div className="row">
          <div className="bookingWrap">
            <h5 className="text-light">Search Services:</h5>
            <input
              type="text"
              value={search}
              className="form-control form-control-md my-3 bookingInput"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-sm-6 userDashCol bookingCol">
            {services &&
              services
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => {
                  return (
                    <div class="card my-3 cardColor">
                      <div class="card-header cardHeader">
                        <h3 className="text-center">{item.title}</h3>
                      </div>
                      <div class="card-body">
                        <h6>Price: {item.price}</h6>
                        <h6>City: {item.city}</h6>
                        <p>Contact Number: {item.mobile} </p>
                        <div className="d-flex justify-content-between">
                          <strong className="">
                            Professional Name: {item.professional.name}
                          </strong>
                          <h4>
                            Booked<i class="bi bi-check2-all"></i>
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}
