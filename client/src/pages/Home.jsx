import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../images/homeImg.jpg";
const Home = () => {
  return (
    <>
      <div className="homeImg">
        <img src={MyImage} className="img-fluid homeImg" alt="" />
        <div className="homeLinks">
          <div>
            <Link className="text-decoration-none" to="register/user">
              <strong className="homeLink">Register As a User</strong>
            </Link>
          </div>
          <div>
            <Link
              className="text-decoration-none"
              to={`/register/professional`}
            >
              <strong className="homeLink">Register As a Professional</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="feature-main-wrap">
          <div>
            <h1 className="my-4 feature-wrap-heading">Why ServeEase?</h1>
            <div className="feature-wrap">
              <div className="feature-icons">
                <i class="bi bi-clipboard-check-fill"></i>
              </div>
              <div>
                <strong>Transparent Pricing</strong>
                <p>See fixed prices before you book. No hidden charges.</p>
              </div>
            </div>
            <div className="feature-wrap">
              <div className="feature-icons">
                <i class="bi bi-person-check-fill"></i>
              </div>
              <div>
                <strong>Experts Only</strong>
                <p>
                  Our Professionals are well trained and have on-job expertise.
                </p>
              </div>
            </div>
            <div className="feature-wrap">
              <div className="feature-icons">
                <i class="bi bi-bag-check-fill"></i>
              </div>
              <div>
                <strong>Fully Equipped</strong>
                <p>We bring everything needed to get the job done well.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="feature-right-wrap">
              <div className="feature-icons-right">
                <i class="bi bi-award-fill"></i>
              </div>
              <strong>100% Quality Assured</strong>
              <p>If you dont love our service, we will make it right</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
