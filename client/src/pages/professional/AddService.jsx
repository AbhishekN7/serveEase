import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { createAd } from "../../redux/actions/adActions";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { createAd } from "../../toolkit/adSlice";
import { toast } from "react-toastify";
import { addService } from "../../reduxToolkit/slices/serviceSlice";
import { useNavigate } from "react-router-dom";

// import { createAd } from "../../../../backend/controllers/adController";
// import { createAd } from "../../store/actions/blogActions";
export default function AddService() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.login);
  const [preview, setPreview] = useState([]);
  const [image, setImg] = useState([]);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "Task",
      mobile: 12435,
      price: "1200",
      city: "delhi",
    },

    validationSchema: yup.object({
      title: yup.string().required("Task is Required"),
      city: yup.string().required("Enter City"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // const fd = new FormData();
      // fd.append("title", values.title);
      // fd.append("mobile", values.mobile);
      // fd.append("price", values.price);
      // fd.append("city", values.city);
      // fd.append("category", values.category);
      // for (let i = 0; i < image.length; i++) {
      //   fd.append("img", image[i]);
      // }
      // image.forEach((single) => fd.append("img", single));
      // image.map((single) => fd.append("img", single));
      // console.log(fd.entries());
      dispatch(addService(values));
    },
  });

  // const handleImageChange = (e) => {
  //   let img = e.target.files;
  //   // setPreview(url);
  //   let urlArray = [];
  //   for (let i = 0; i < img.length; i++) {
  //     urlArray.push(URL.createObjectURL(img[i]));
  //   }
  //   setPreview(urlArray);
  //   setImg(img);
  //   console.log(img);
  // };

  // useEffect(() => {
  //   getCategory();
  // }, []);

  useEffect(() => {
    if (!login.name && !login.proLogin) {
      navigate("/login/professional");
    }
  }, [login]);
  return (
    <>
      {/* {JSON.stringify(category)} */}
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <form onSubmit={formik.handleSubmit}>
                <div className="card cardColor">
                  <div className="card-header text-center cardHeader">
                    <h4>Create Service</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      <label for="title" className="form-label">
                        <strong>Title</strong>
                      </label>
                      <input
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className={
                          formik.errors.title && formik.touched.title
                            ? "form-control is-invalid cardInput"
                            : "form-control cardInput"
                        }
                        id="title"
                        placeholder="Enter Title"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        <strong>{formik.errors.title}</strong>
                      </div>
                    </div>
                    {/* <div>
                      <label for="mobile" className="form-label">
                        <strong>Mobile Number</strong>
                      </label>
                      <input
                        name="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className={
                          formik.errors.mobile && formik.touched.mobile
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="timobiletle"
                        placeholder="Enter mobile number"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        <strong>{formik.errors.mobile}</strong>
                      </div>
                    </div> */}
                    {/* <div className="mt-2">
                      <ReactQuill
                        theme={"snow"}
                        // onChange={formik.handleChange}
                        name="desc"
                        value={desc}
                        onChange={setDesc}
                      />
                    </div> */}
                    <div className="mt-2">
                      <label for="price" className="form-label">
                        <strong>Price</strong>
                      </label>
                      <input
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className={
                          formik.errors.price && formik.touched.price
                            ? "form-control is-invalid cardInput"
                            : "form-control cardInput"
                        }
                        id="desc"
                        placeholder="Enter Price"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        <strong>{formik.errors.price}</strong>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label for="city" className="form-label">
                        <strong>City</strong>
                      </label>
                      <input
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className={
                          formik.errors.city && formik.touched.city
                            ? "form-control is-invalid cardInput"
                            : "form-control cardInput"
                        }
                        id="desc"
                        placeholder="Enter City"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        <strong>{formik.errors.city}</strong>
                      </div>
                    </div>
                    {/* <div className="mt-2">
                      <label for="img" className="form-label">
                        <strong>Image URL</strong>
                      </label>
                      <input
                        name="img"
                        multiple
                        // value={formik.values.img}
                        onChange={handleImageChange}
                        type="file"
                        className={"form-control"}
                        id="img"
                        placeholder="Choose Image"
                      />
                      {preview.map((item) => {
                        return (
                          <img
                            key={item}
                            src={item}
                            height="100"
                            className="mx-2"
                          />
                        );
                      })}
                    </div> */}

                    {/* <div className="mt-2">
                      <label for="option" className="form-label">
                        <strong>Select category</strong>
                      </label>

                      <select
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.category && formik.touched.category
                            ? "form-select is-invalid"
                            : "form-select"
                        }
                      >
                        <option selected>Select </option>
                        {category.map((item) => (
                          <option value={item._id}>{item.name}</option>
                        ))}
                      </select>
                    </div> */}
                    <button type="submit" className="w-100 mt-3 button">
                      <strong>Add Service</strong>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}
