import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateUserService,
  userBookedService,
} from "../../reduxToolkit/slices/serviceSlice";

export default function Details() {
  const { checkout } = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   useEffect({}, [checkout]);

  const checkoutFn = async (arg) => {
    console.log(arg);
    dispatch(updateUserService(arg));
    // navigate("/user/account");
  };
  return (
    <>
      {/* {JSON.stringify(checkout)} */}
      {checkout &&
        checkout.map((item) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div class="card my-3">
                    <div class="card-header cardHeader">
                      <h3>{item.title}</h3>
                    </div>
                    <div class="card-body cardColor">
                      <h6>Price: {item.price}</h6>
                      <h6>City: {item.city}</h6>
                      <p>Contact Number: {item.professional.mobile} </p>
                      <div className="d-flex justify-content-between">
                        <button
                          onClick={(e) =>
                            checkoutFn({ id: item._id, booked: true })
                          }
                          className="button"
                        >
                          Book This Service
                        </button>
                        <div>
                          <strong className="">
                            Professional Name: {item.professional.name}
                          </strong>
                          <br />
                          <strong>From :{item.professional.city}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
