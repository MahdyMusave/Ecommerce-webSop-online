import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../App.css";

function Header() {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+98 9380325329">
                  +98 9380325329
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper p-2">
        <div className="container-xxl">
          <div className="row align-items-center ">
            <div className="col-2">
              <h2>
                <Link to="#" className="text-white">
                  Dev Corner
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search product here ..."
                  aria-label="Search product here ..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text " id="Basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5 ">
              <div className="header-upper-links mt-1 d-flex align-items-center justify-content-between">
                <Link
                  to="#"
                  className="d-flex align-items-center text-white gap-10"
                >
                  <img src="image/exchange-svgrepo-com.svg" alt="Compare" />
                  <p className="mb-0">
                    Compare <br /> Products
                  </p>
                </Link>

                <Link
                  to="#"
                  className="d-flex align-items-center text-white gap-10"
                >
                  <img
                    src="image/achievement-award-medal-icon.svg"
                    alt="Favourite"
                  />
                  <p className="mb-0">
                    Favourite <br /> wishlist
                  </p>
                </Link>
                <Link
                  to="#"
                  className="d-flex align-items-center text-white gap-10"
                >
                  <img src="image/login-svgrepo-com.svg" alt="Login" />
                  <p className="mb-0">
                    Login <br /> my Accound
                  </p>
                </Link>
                <Link
                  to="#"
                  className="d-flex align-items-center text-white gap-10"
                >
                  <img src="image/market-svgrepo-com.svg" alt="cart" />
                  <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-down py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="./image/bubble-gum-diet.png" alt="menu" />
                        <span className="md-5 d-inline-block">
                          Shop Categories
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item text-white" href="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" href="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" href="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-15">
                      <NavLink
                        className="text-white text-decoration-none fs-8"
                        to="/"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        className="text-white text-decoration-none fs-8"
                        to="/store"
                      >
                        our store
                      </NavLink>
                      <NavLink
                        className="text-white text-decoration-none fs-8"
                        to="/blog"
                      >
                        blogs
                      </NavLink>
                      <NavLink
                        className="text-white text-decoration-none fs-8"
                        to="/contact"
                      >
                        Content
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
