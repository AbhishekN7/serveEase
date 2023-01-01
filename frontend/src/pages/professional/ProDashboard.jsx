import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProAd } from "../../reduxToolkit/slices/proSlice";

export default function ProDashboard() {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({});
  const [isPublished, setisPublished] = useState();
  const [show, setShow] = useState(false);
  const { login } = useSelector((state) => state.login);
  const getProServices = async () => {
    const {
      data: { result },
    } = await axios.get(
      `${process.env.REACT_APP_URL}/api/services/pro/service/${login.id}`
    );
    setServices(result);
  };
  useEffect(() => {
    getProServices();
    setShow(false);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {services &&
              services.map((item) => {
                return (
                  <div class="card my-3 cardColor">
                    <div class="card-header cardHeader">
                      <div className="d-flex justify-content-between">
                        <h4>{item.title}</h4>
                        <button
                          className="btn btn-sm button"
                          onClick={(e) => {
                            setSelectedService(item);
                            setisPublished(item.publish);
                            setShow(true);
                          }}
                        >
                          Details
                        </button>
                      </div>
                      <hr />
                      <h4>Price: {item.price}</h4>
                    </div>
                  </div>
                );
              })}
          </div>
          {show && (
            <div className="col-sm-4">
              <div class="card my-3 cardColor">
                <div class="card-header cardHeader">
                  <h3 className="text-center">Service Details</h3>
                </div>
                <div class="card-body">
                  <h4>Title: {selectedService.title}</h4>
                  <h5>Price: {selectedService.price}</h5>
                  <h5>City: {selectedService.city}</h5>
                  <h5>
                    Status: {selectedService.booked ? "Booked" : "Not Booked"}
                  </h5>
                </div>
              </div>
            </div>
          )}
          <div className="col-sm-4">
            {show && selectedService && (
              <div class="form-check form-switch my-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="id"
                  value={selectedService.publish}
                  defaultChecked={selectedService.publish}
                  onClick={(e) => setisPublished(e.target.checked)}
                />
                <label class="form-check-label" for="id">
                  <strong className="text-light">Publish</strong>
                </label>
                <button
                  type="button"
                  className="button"
                  onClick={(e) =>
                    dispatch(
                      updateProAd({ ...selectedService, publish: isPublished })
                    )
                  }
                >
                  {isPublished ? "Publish Ad" : "Unpublish Ad"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
