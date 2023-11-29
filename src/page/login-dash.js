import { Link } from "react-router-dom";
import React from "react";

import CostomInput from "../component/costomInput";

const LoginDash = () => {
  return (
    <>
      <div
        className="py-5 d-flex align-items-center"
        style={{ background: "#ffd333", minHeight: "100vh" }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3 ">
          <form>
            <h3 className="text-center">Login</h3>
            <p className="text-center">Login to your account to continue</p>
            <CostomInput
              type="text"
              i_id="email"
              placeholder="email"
              label="email"
            />
            <CostomInput
              type="text"
              i_id="email"
              placeholder="email"
              label="password"
            />
            <div className="text-end pt-1 py-4">
              <Link to="/forget-password" className="text-decoration-none">
                forget password
              </Link>
            </div>

            <Link
              to="/admin"
              className="btn border-2 px-4 py-2 text-white w-100 fw-bold fs-5"
              type="submit"
              style={{ background: "#ffd333" }}
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginDash;
