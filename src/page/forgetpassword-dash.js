import React from "react";
import CostomInput from "../component/costomInput";
const ForgetPasswordDash = () => {
  return (
    <>
      <div
        className="py-5 d-flex align-items-center"
        style={{ background: "#ffd333", minHeight: "100vh" }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3 ">
          <form>
            <h3 className="text-center fw-bold">forget-password</h3>
            <p className="text-center">
              please enter your register email to get reset password mail.
            </p>
            <CostomInput
              type="text"
              i_id="email"
              placeholder="email"
              label="email"
            />

            <button
              className="btn border-2 px-4 py-2 text-white w-100 fw-bold"
              type="submit"
              style={{ background: "#ffd333" }}
            >
              send Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordDash;
