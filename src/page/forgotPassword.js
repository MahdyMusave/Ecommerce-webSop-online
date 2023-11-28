import React from "react";
import Meta from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      <Meta title="forgot Password" />
      <BreadCrumb title="forgot Password" />
      <div className="forgot">
        <div className="forgot-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="auth-card">
                <h3 className="text-center fw-normal mb-3">
                  Forgot your password{" "}
                </h3>
                <p>
                  Lost your password? Please enter your username or email
                  address. You will receive a link to create a new password via
                  email
                </p>
                <form action="" className="d-flex flex-column gap-15 my-2">
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <div className=" d-flex justify-content-center gap-15 align-items-center flex-column py-2">
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

export default ForgotPassword;
