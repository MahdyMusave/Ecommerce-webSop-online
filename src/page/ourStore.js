import React, { useState } from "react";
import BreadCrumb from "../component/breadCrumb";
import ReactStars from "react-rating-stars-component";
import Meta from "../component/meta";
import { Link } from "react-router-dom";
import ProductCard from "../component/productCard";
const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="our store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl container-stroe">
          <div className="row">
            <div className="col-3">
                <div className="filter-card mb-3">
                  <h2 className="filter-title">Shop By Categories</h2>
                  <div>
                    <ul className="ps-0">
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
              <div className="filter-card mb-3">
                <h2 className="filter-title">Filter By</h2>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div className="form-check">
                    <form>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="checkbox1"
                          name="checkbox"
                        />
                        <label className="form-check-label" htmlFor="checkbox1">
                          In Stock(1)
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="checkbox2"
                          name="checkbox"
                        />
                        <label className="form-check-label" htmlFor="checkbox2">
                          Out of stock(0);
                        </label>
                      </div>
                    </form>
                  </div>
                  <h5 className="sub-title">Price </h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3 ">
                      <input
                        type="text"
                        id="find_by_from"
                        placeholder="From"
                        className="form-control"
                      />
                      <label htmlFor="find_by_from" className="text-black">
                        From
                      </label>
                    </div>
                    <div className="form-floating mb-3 ">
                      <input
                        type="text"
                        id="find_by_To"
                        placeholder="To"
                        className="form-control"
                      />
                      <label htmlFor="find_by_from" className="text-black">
                        To
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors </h5>
                  <div>
                    <ul className="colors p-s0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size </h5>
                  <div className="form-check">
                    <form>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="color1"
                          name="checkbox"
                        />
                        <label className="form-check-label" htmlFor="color1">
                          $(3)
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="form-check">
                    <form>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="color2"
                          name="checkbox"
                        />
                        <label className="form-check-label" htmlFor="color2">
                          $(5)
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="form-check">
                    <form>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="color3"
                          name="checkbox"
                        />
                        <label className="form-check-label" htmlFor="color3">
                          $(9)
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="form-check">
                    <form>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="color4"
                          name="checkbox"
                        />
                        <label className="form-check-label" htmlFor="color4">
                          $(2)
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h2 className="filter-title">Product Tags</h2>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light rounded-2 py-2 px-3 text-secondary">
                    Headphone
                  </span>
                  <span className="badge bg-light rounded-2 py-2 px-3 text-secondary">
                    Laptop
                  </span>
                  <span className="badge bg-light rounded-2 py-2 px-3 text-secondary">
                    Mobile
                  </span>
                  <span className="badge bg-light rounded-2 py-2 px-3 text-secondary">
                    wire
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h2 className="filter-title">Random Product</h2>
                <div className="random-product d-flex">
                  <div className="w-20 mx-2" style={{ width: "40%" }}>
                    <img
                      src="./image/camera.png "
                      className="img-fluid"
                      alt="random_product"
                    />
                  </div>
                  <div className="w-70 mx-1">
                    <h4>
                      <Link
                        to="/"
                        className="product-title text-decoration-none"
                      >
                        Pioneer DJ HDJ-X5-S Professional DJ Headphone DJ
                      </Link>
                    </h4>
                    <ReactStars
                      count={5}
                      value={2}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="price my-2">$300</p>
                  </div>
                </div>
                <div className="random-product d-flex ">
                  <div className="w-20 mx-2" style={{ width: "40%" }}>
                    <img
                      src="./image/camera.png "
                      className="img-fluid"
                      alt="random_product"
                    />
                  </div>
                  <div className="w-70 mx-1">
                    <h4>
                      <Link
                        to="/"
                        className="product-title text-decoration-none"
                      >
                        Pioneer DJ HDJ-X5-S Professional DJ Headphone DJ
                      </Link>
                    </h4>
                    <ReactStars
                      count={5}
                      value={2}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="price my-2">$300</p>
                  </div>
                </div>
                <div className="random-product d-flex ">
                  <div className="w-20 mx-2" style={{ width: "40%" }}>
                    <img
                      src="./image/camera.png "
                      className="img-fluid"
                      alt="random_product"
                    />
                  </div>
                  <div className="w-70 mx-1">
                    <h4>
                      <Link
                        to="/"
                        className="product-title text-decoration-none"
                      >
                        Pioneer DJ HDJ-X5-S Professional DJ Headphone DJ
                      </Link>
                    </h4>
                    <ReactStars
                      count={5}
                      value={2}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="price my-2">$300</p>
                  </div>
                </div>
                <div className="random-product d-flex ">
                  <div className="w-20 mx-2" style={{ width: "40%" }}>
                    <img
                      src="./image/camera.png "
                      className="img-fluid"
                      alt="random_product"
                    />
                  </div>
                  <div className="w-70 mx-1">
                    <h4>
                      <Link
                        to="/"
                        className="product-title text-decoration-none"
                      >
                        Pioneer DJ HDJ-X5-S Professional DJ Headphone DJ
                      </Link>
                    </h4>
                    <ReactStars
                      count={5}
                      value={2}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="price my-2">$300</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex  justify-content-between align-items-center gap-10">
                  <div className="d-flex align-items-center gap-10 ">
                    <p className="mb-0 d-block" style={{ width: "100%" }}>
                      Sort By
                    </p>
                    <select
                      name="orderby"
                      class="orderby form-control form-select"
                      aria-label="Shop order"
                    >
                      <option value="menu_order">Default sorting</option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price" selected="selected">
                        Sort by price: low to high
                      </option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div>
                  <div
                    className="d-flex align-items-center justify-content-end
                  "
                  >
                    <p className="d-flex align-items-center gap-10 mb-0">
                      21 Products
                    </p>
                    <div className="icon-img-flex-bar d-flex gap-10 align-items-center">
                      <img
                        onClick={() => {
                          setGrid(2);
                        }}
                        src="./image/gift.png"
                        className="d-block img-fluid"
                        alt="flex-img"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="./image/gift.png"
                        className="d-block img-fluid"
                        alt="flex-img"
                      />
                      <img
                        onClick={() => {
                          setGrid(8);
                        }}
                        src="./image/gift.png"
                        className="d-block img-fluid"
                        alt="flex-img"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="./image/gift.png"
                        className="d-block img-fluid"
                        alt="flex-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex flex-wrap gap-15">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
