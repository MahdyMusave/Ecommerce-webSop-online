import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img
                  src="/newsLetter.png"
                  alt="newsLetter"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "blue",
                  }}
                />
                <h2 className="text-white mb-0 text-center">
                  Sign up for Newsletters
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control p-1 px-3"
                  placeholder="Your Email Address ..."
                  aria-label="Your Email Address ..."
                  aria-describedby="basic-addon2"
                />
                <div className="newsletter-form__field-wrapper">
                  <button
                    className="input-group-text  button"
                    id="Basic-addon2"
                    type="submit"
                  >
                    Subscript
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno:277 Near vill chopal, <br />
                  Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+98 9380325329"
                  className="mt-4 d-block mb-2 text-white text-decoration-none"
                >
                  +989380325329
                </a>
                <a
                  href="mailto:mahdy@gmail.com"
                  className="mt-4 d-block mb-2 text-white text-decoration-none"
                >
                  musavemahdy@gmail.com
                </a>
                <div className="social-icons">
                  <a href="">
                    <img src="" alt="social icons" />
                  </a>
                  <a href="">
                    <img src="" alt="social icons" />
                  </a>
                  <a href="">
                    <img src="" alt="social icons" />
                  </a>
                  <a href="">
                    <img src="" alt="social icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Devloper's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
