import Meta from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const CheckOut = () => {
  return (
    <>
      <Meta title="check out" />
      <BreadCrumb title="check out" />
      <div className="check-out">
        <div className="check-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <div className="head-txt">
                  <h2 className="fw-bolder text-dark fs-2  ">Digitic</h2>
                </div>
                <nav className="link-content">
                  <ol className="breadcrumb d-flex justify-content-start gap-10 list-style-none">
                    <li>
                      <Link to="/cart" className="text-decoration-none ">
                        Cart
                      </Link>
                    </li>
                    /
                    <li>
                      <Link to="/blog" className="text-decoration-none">
                        Infomation
                      </Link>
                    </li>
                    /
                    <li>
                      <Link to="" className="text-decoration-none">
                        Shopping
                      </Link>
                    </li>
                    /
                    <li>
                      <Link to="/payment" className="text-decoration-none">
                        Payment
                      </Link>
                    </li>
                  </ol>
                </nav>
                <div className="contect-txt">
                  <h3>Contect information</h3>
                  <p>Navdeep Dahiya (monund0232@gmail.com)</p>

                  <div className="shop-address">
                    <h3>Shopping address</h3>
                    <div className="">
                      <form>
                        <select
                          class="form-select multiple form-select-lg"
                          aria-label="Default select example"
                        >
                          <option selected className="p-4">
                            Country/Region
                          </option>
                          <option value="Us" className="p-4">
                            Us
                          </option>
                          <option value="Iran" className="p-4">
                            Iran
                          </option>
                          <option value="Irag" className="p-4">
                            Irag
                          </option>
                          <option value="Afg" className="p-4">
                            Afg
                          </option>
                          <option value="Chain" className="p-4">
                            Chain
                          </option>
                          <option value="Sewdan" className="p-4">
                            Sewdan
                          </option>
                          <option value="Itay" className="p-4">
                            Itay
                          </option>
                        </select>
                        <div className="w-100 d-flex justify-content-between my-2">
                          <div className="" style={{ width: "47%" }}>
                            <input
                              type="text"
                              id="first-name"
                              name="first-name"
                              placeholder="First-name (optinal)"
                              className="form-control py-2"
                            />
                          </div>
                          <div className="" style={{ width: "47%" }}>
                            <input
                              type="text"
                              id="last-name"
                              name="last-name"
                              placeholder="Last-name"
                              className="form-control py-2"
                            />
                          </div>
                        </div>

                        <div className="my-2">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            className="form-control p-2"
                          />
                        </div>
                        <div className="my-2">
                          <input
                            type="text"
                            id="Apartment"
                            name="Apartment"
                            placeholder="Apartment, suite,etc (optional)"
                            className="form-control p-2"
                          />
                        </div>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                          <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="city"
                            className="form-control"
                          />
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="state"
                            className="form-control mx-4"
                          />
                          <input
                            type="text"
                            id="zip-code"
                            name="Zip code"
                            placeholder="Zip code"
                            className="form-control"
                          />
                        </div>
                        <div className="d-flex justify-content-between py-3">
                          <button className="border-0 p-2 px-3">
                            <Link
                              to="/cart"
                              className="text-decoration-none border-none text-dark"
                            >
                              <IoMdArrowRoundBack className="texr-dark mx-2" />
                              Return to cart
                            </Link>
                          </button>
                          <button className="btn btn-dark">
                            Cotinue to Shopping
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <div className="product-details d-flex justify-content-between align-items-start">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="card-img bg-white position-relative">
                        <span className="prodcut-amount badge position-absolute border border-dark text-dark ">
                          1
                        </span>
                        <img
                          src="./image/[removal.ai]_ae35bf29-25b7-4867-8b22-be70946731f3_eyesyte-4g-surveillance-camera.png"
                          alt="product-watch"
                          style={{ width: "200px", height: "200px" }}
                        />
                      </div>
                      <div className="d-flex flex-column mx-3">
                        <div className="head-product-name">
                          <h4>Camera</h4>
                        </div>
                        <div className="body-product-name">
                          <h4>Camera 2023</h4>
                        </div>
                      </div>
                    </div>
                    <div className="total">
                      <h2>$ 100</h2>
                    </div>
                  </div>
                  <div className="body-content py-3 my-5">
                    <div className="d-flex justify-content-between py-3 align-items-center">
                      <h2>Subtotal</h2>
                      <h4>$100</h4>
                    </div>
                    <div className="d-flex justify-content-between py-3 align-items-center">
                      <h2>Subtotal</h2>
                      <h4>$100</h4>
                    </div>
                  </div>
                  <div className="footer-content">
                    <div className="d-flex justify-content-between py-3 align-items-center">
                      <h2>Total</h2>
                      <h4>$100</h4>
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
};

export default CheckOut;
