import React from "react";
import Meta from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <>
      <Meta title="forgot Password" />
      <BreadCrumb title="forgot Password" />
      <div className="reset">
        <div className="reset-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="auth-card">
                <h3 className="text-center fw-normal mb-3">
                  reset your password
                </h3>

                <form action="" className="d-flex flex-column gap-15 my-2">
                  <div className="">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    <input
                      type="password"
                      name="password"
                      placeholder="repeat password"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <div className=" d-flex justify-content-center gap-15 align-items-center flex-column py-2">
                      <button className="btn btn-secondary  border-0  px-4 rounded-pill">
                        cancel
                      </button>
                      <button className="btn btn-secondary border-0  px-4 rounded-pill">
                        <Link
                          to="/"
                          className="text-decoration-none px-3 text-white"
                        >
                          ok
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

export default ResetPassword;
