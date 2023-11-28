import React from "react";
import Meta from "../component/meta";
import { Link } from "react-router-dom";
import BreadCrumb from "../component/breadCrumb";
const SignUp = () => {
  return (
    <>
      <Meta title="sign up" />
      <BreadCrumb title="sign up" />
      <div className="sign">
        <div className="sign-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="auth-card">
                <h3 className="text-center fw-normal mb-3">sign Up</h3>
                <form action="" className="d-flex flex-column gap-15 my-2">
                  <div className="">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="first-name"
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Last name"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="tel"
                      name="phonenumber"
                      placeholder="Phonen number"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="password"
                      name="password"
                      placeholder="Repeat password"
                      className="form-control"
                    />
                  </div>
                  <div className="forgot mb-3">
                    <Link
                      to="/forgot-password"
                      className="text-decoration-none text-dark mb-2 fs-7 "
                    >
                      Forgot Password
                    </Link>
                    <div className="d-flex justify-content-center gap-15 align-items-center py-2">
                      <button className="btn btn-secondary  border-0  px-4 rounded-pill">
                        Sign Up
                      </button>
                      <button className="btn btn-secondary border-0  px-4 rounded-pill">
                        <Link
                          to="/login"
                          className="text-decoration-none text-white"
                        >
                          Login
                        </Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
