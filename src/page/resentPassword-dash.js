import React from "react";
import CostomInput from "../component/costomInput";
const ResentPasswordDash = () => {
  return (
    <>
      <div
        className="py-5 d-flex align-items-center"
        style={{ background: "#ffd333", minHeight: "100vh" }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3 ">
          <form>
            <h3 className="text-center fw-bold">reset-password</h3>
            <p className="text-center">please enter a new password</p>

            <CostomInput
              type="password"
              i_id="password"
              placeholder="password"
              label="password"
            />
            <CostomInput
              type="password"
              i_id="password"
              placeholder="conform password"
              label="conform password"
            />

            <button
              className="btn border-2 px-4 py-2 text-white w-100 fw-bold"
              type="submit"
              style={{ background: "#ffd333" }}
            >
              reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResentPasswordDash;
