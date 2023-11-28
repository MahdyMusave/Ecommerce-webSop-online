import React from "react";
import Meta from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Meta title="login" />
      <BreadCrumb title="login" />
      <div className="login">
        <div className="login-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12"></div>
              <div className="auth-card">
                <h3 className="text-center fw-normal mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15 my-2">
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                    />
                  </div>
                  <div className="forgot mb-3">
                    <Link
                      to="/forgot-password"
                      className="text-decoration-none text-dark mb-2 fs-7 "
                    >
                      forgot Password
                    </Link>
                    <div className="d-flex justify-content-center gap-15 align-items-center py-2">
                      <button className="btn btn-secondary border-0  px-4 rounded-pill">
                        Login
                      </button>
                      <button className="btn btn-secondary  border-0  px-4 rounded-pill">
                        sign up
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

export default Login;
