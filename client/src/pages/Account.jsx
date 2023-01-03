import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "../app.css";
import { getSingleUser, updateUser } from "../reduxToolkit/slices/userSlice";

export default function Account() {
  const [single, setSingle] = useState();
  const [userData, setUserData] = useState({});
  const { singleUser, updatedUser } = useSelector((state) => state.user);
  const { login } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const getsingleUser = async () => {
    const {
      data: { result },
    } = await axios.get(`${process.env.REACT_APP_URL}/api/user/${login.id}`);
    setSingle(result);
    setUserData(result);
  };

  useEffect(() => {
    getsingleUser();
  }, [updatedUser]);
  return (
    <div>
      {/* {JSON.stringify(single)} */}
      {/* <pre>{JSON.stringify(userData)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 accountCol">
            {single &&
              [single].map((item) => {
                return (
                  <div class="card accountCard">
                    <div class="card-header accountCardheader">
                      <h3>Account Details</h3>
                    </div>
                    <div class="card-body">
                      <h4>Name : {item.name}</h4>
                      <h4>Email : {item.email}</h4>
                      <h4>City : {item.city}</h4>
                      <h4>Mobile No : {item.mobile}</h4>
                      <h4>Password : *****</h4>
                      <button
                        className="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div class="modal fade " id="exampleModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered ">
          <div class="modal-content cardColor">
            <div class="modal-header cardHeader">
              <h4 className="modal-title text-center">Edit Details</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label for="name" class="form-label">
                Enter Name
              </label>
              <input
                type="text"
                value={userData.name}
                class="form-control cardInput"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                id="name"
                placeholder="Enter Your Name"
              />
              <label for="email" class="form-label">
                Enter Email
              </label>
              <input
                type="text"
                value={userData.email}
                class="form-control cardInput"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                id="email"
                placeholder="Enter Your Email"
              />
              <label for="city" class="form-label">
                Enter City
              </label>
              <input
                type="text"
                value={userData.city}
                class="form-control cardInput "
                onChange={(e) =>
                  setUserData({ ...userData, city: e.target.value })
                }
                id="city"
                placeholder="Enter Your City"
              />
              <label for="mobile" class="form-label">
                Enter Mobile No
              </label>
              <input
                type="text"
                value={userData.mobile}
                class="form-control cardInput"
                onChange={(e) =>
                  setUserData({ ...userData, mobile: e.target.value })
                }
                id="mobile"
                placeholder="Enter Your Mobile"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="button" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="button"
                onClick={(e) => dispatch(updateUser(userData))}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
