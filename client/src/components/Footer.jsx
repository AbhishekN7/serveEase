import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-wrap">
        <div className="footer">
          <div className="footer-upper-wrap">
            <div className="footer-upper-wrap-logo">
              <i class="bi bi-box-seam-fill"></i>
              <a href="">ServeEase</a>
            </div>
            <div className="copyright">
              <p>Copyright ©2022 ServeEase</p>
            </div>
            <div className="footer-upper-quick-links">
              <i class="bi bi-twitter"></i>

              <i class="bi bi-linkedin"></i>

              <i class="bi bi-facebook"></i>

              <i class="bi bi-instagram"></i>

              <i class="bi bi-youtube"></i>
            </div>
          </div>
          <div className="footer-lower-wrap">
            <div>
              <a href="" className="mx-2">
                Privacy Policy
              </a>
            </div>
            <div>
              <a href="">Contact Us</a>
            </div>
            <div>
              <a href="" className="mx-2">
                Near Me
              </a>
            </div>
            <div>
              <a href="">About Us</a>
            </div>
            <div>
              <a href="">Terms And Conditions</a>
            </div>
          </div>
          <p className="text-center py-5">Made With ❤️ By Abhishek </p>
        </div>
      </div>
    </>
  );
}
