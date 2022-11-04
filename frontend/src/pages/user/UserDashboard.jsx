import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  checkoutService,
  getAllServices,
} from "../../reduxToolkit/slices/serviceSlice";

export default function UserDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  const { checkout } = useSelector((state) => state.service);
  const getAllServices = async () => {
    const {
      data: { result },
    } = await axios.get(`${process.env.REACT_APP_URL}/api/services/`);
    setServices(result);
  };

  const checkoutFn = (arg) => {
    dispatch(checkoutService(arg));
    navigate("/details");
  };

  useEffect(() => {
    getAllServices();
  }, []);

  // useEffect(() => {}, [checkout]);

  return (
    <>
      {/* {JSON.stringify(services)} */}
      {services &&
        services.map((item) => {
          return (
            <>
              <div className="container ">
                <div className="row userDashRow">
                  <div className="col-sm-4 col-md-6 col-lg-4 userDashCol">
                    <div class="card my-3 userDashCard">
                      <div class="card-header cardHeader">
                        <h3>{item.title}</h3>
                      </div>
                      <div class="card-body">
                        <h6>Price: {item.price}</h6>
                        <h6>City: {item.city}</h6>
                        <p>Contact Number: {item.mobile} </p>
                        <div className="d-flex justify-content-between">
                          <button
                            onClick={(e) => checkoutFn(item._id)}
                            className="button"
                          >
                            Checkout
                          </button>
                          <strong className="">
                            Professional Name: {item.professional.name}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
