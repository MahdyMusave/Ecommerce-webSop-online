import React from "react";

import BreadCrumb from "../component/breadCrumb";
import Meta from "../component/meta";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="cart" />
      <BreadCrumb title="cart" />
      <div className="cart">
        <div className="cart-wrapper home-wrapper-2">
          <div className="container-xxl cart-container">
            <div className="row">
              <div className="col-12">
                <div className="cart-head d-flex flex-wrap py-4 px-4 align-items-center justify-content-between ">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>
                <div className="cart-data d-flex justify-content-between align-items-center">
                  <div className="cart-col-1 d-flex  gap-10 align-items-center">
                    <div
                      className="cart-img-prodcut m-0 py-4"
                      style={{ width: "40%" }}
                    >
                      <img
                        src="./image/smart_tv.png"
                        className="img-fluid"
                        alt="product-img"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div>
                      <h5 className="title">dkjskldjk</h5>
                      <p className="color">ljdslj</p>
                      <p className="size" jdh></p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">$100.00</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15 ">
                    <div className="">
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        min="1"
                        max="50"
                        className="form-control"
                      />
                    </div>
                    <div className="">
                      <FaTrash />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">$100.00</h5>
                  </div>
                </div>
                <div className=" p-3">
                  <button className="btn btn-dark rounded-pill py-2 px-4">
                    Continue Shopping
                  </button>
                </div>
                <div className="d-flex justify-content-between pt-2 pb-5">
                  <div className="special-txt">
                    <p>Order Special instructions</p>
                  </div>
                  <div className="total-content">
                    <div className=" flex-column d-flex justify-content-end align-items-end">
                      <div className=" sub-text d-flex justify-content-between align-items-center gap-15">
                        <h4>Subtota :</h4>
                        <h3> $100</h3>
                      </div>
                      <p>Taxes and shopping calculated at chackout</p>
                    </div>
                    <button
                      className="btn btn-dark rounded-pill py-2 px-5"
                      style={{ width: "400px" }}
                    >
                      <Link
                        to="/check-out"
                        className="text-decoration-none text-white"
                      >
                        check out
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
