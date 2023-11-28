import React, { useState } from "react";
import Meta from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
import { Link } from "react-router-dom";
import ProductCard from "../component/productCard";
import ReactStars from "react-rating-stars-component";
import ReactPanZoom from "react-image-pan-zoom-rotate";
import Zoom from "react-medium-image-zoom";
import ReactImageZoom from "react-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Circle from "@uiw/react-color-circle";
import { MdFavoriteBorder } from "react-icons/md";
import { PiArrowsClockwiseDuotone } from "react-icons/pi";
import { Accordion } from "flowbite-react";

const SingleProduct = () => {
  const { orderedProduct, setorderProduct } = useState(0);
  const [hex, setHex] = useState("#F44E3B");
  const props = {
    width: 600,
    height: 550,
    zoomWidth: 400,
    zoomHeight: 200,
    img: "https://leonfurze.com/wp-content/uploads/2023/10/f22a5e07-e6f1-4ab3-8e29-80318bdeb932.jpeg",
  };

  return (
    <>
      <Meta title="single product" />
      <BreadCrumb title="Product Name" />

      <div className="single-product">
        <div className="single-product-wrapper home-wrapper-2 py-5">
          <div className="container-xxl single-contaner">
            <div className="row">
              <div className="col-6">
                <div className="product-cart-img p-3 bg-white rounded-2">
                  <div>
                    <ReactImageZoom {...props} />
                  </div>
                </div>
                <div className="multiple-image d-flex flex-wrap justify-content-center gap-15 p-3 bg-white align-items-center">
                  <div className="position-relative">
                    <ReactPanZoom
                      image="https://th.bing.com/th/id/OIG.Rgo3.J1UE_wr1qBsFyMq?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                      alt="laptop"
                    />
                  </div>
                  <div className="position-relative">
                    <ReactPanZoom
                      image="https://th.bing.com/th/id/OIG.E4yZms6kkXnFfYMgXW1r?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                      alt="laptop"
                    />
                  </div>
                  <div className="position-relative">
                    <Zoom>
                      <img
                        src="https://th.bing.com/th/id/OIG.JC2KvlGCIzLXf3dk4qqM?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                        alt="laptop"
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="main-product-details p-4 bg-white rounded-3">
                  <div className="head-product-txt border-bottom">
                    <h3 className="mb-3 title">
                      Kids Headphones Bulk 10 Pack Multi Colored For Students
                    </h3>
                  </div>
                  <div className="body-product-details border-bottom py-2">
                    <p className="price mb-0"> $200</p>
                    <div className="d-flex align-items-center">
                      <ReactStars
                        count={5}
                        value={2}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                        classNames="fs-5"
                      />
                      <span className="mx-2">(2 Reviews)</span>
                    </div>
                    <h5 className="py-2">Write here</h5>
                  </div>
                  <div className="body-product-details2 border-bottom py-2">
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Type :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Brand :</h3>
                      <p className="product-data">Havells</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Category :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Availablity :</h3>
                      <p className="product-data">In stock</p>
                    </div>
                    <div className="d-flex gap-10 flex-column my-2">
                      <h3 className="product-heading">Size :</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <p className="badge border border-1 bg-white text-dark">
                          S
                        </p>
                        <p className="badge border border-1 bg-white text-dark">
                          M
                        </p>
                        <p className="badge border border-1 bg-white text-dark">
                          L
                        </p>
                        <p className="badge border border-1 bg-white text-dark">
                          XL
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">color :</h3>
                      <Circle
                        colors={["#F44E3B", "#FE9200", "#FCDC00", "#DBDF00"]}
                        color={hex}
                        onChange={(color) => {
                          setHex(color.hex);
                        }}
                      />
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">quantity :</h3>
                      <div>
                        <input
                          type="number"
                          name="quantity"
                          min="1"
                          max="50"
                          className="form-control"
                          style={{ width: "70px" }}
                        />
                      </div>
                      <div className="d-flex align-center gap-15">
                        <button className="button border-0 py-2 px-4 bg-dark text-white rounded-pill">
                          Add to cart
                        </button>
                        <button className="button border-0 py-2 px-4 bg-dark text-white rounded-pill">
                          buy iy now
                        </button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15 py-3">
                      <div className="">
                        <MdFavoriteBorder />
                        <span className="mx-2">Add to washlist</span>
                      </div>
                      <div className="gap-10">
                        <PiArrowsClockwiseDuotone />
                        <span className="mx-2">Add to favorite </span>
                      </div>
                    </div>
                    <div className="accordion position-relative ">
                      <Accordion>
                        <Accordion.Panel>
                          <Accordion.Title
                            className="acc-title postion-relative mb-4 py-2 pt-3 "
                            style={{ width: "100%" }}
                          >
                            Shipping & Returns
                          </Accordion.Title>
                          <Accordion.Content>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                          </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                          <Accordion.Title
                            className="acc-title postion-relative mb-4 py-2 pt-3 "
                            style={{ width: "100%" }}
                          >
                            Materiais
                          </Accordion.Title>
                          <Accordion.Content>
                            <p className="mb-2 text-dark fw-bold ">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel className="py-5">
                          <Accordion.Title
                            className="acc-title postion-relative mb-4  pt-3 "
                            style={{ width: "100%" }}
                          >
                            Dimension
                          </Accordion.Title>
                          <Accordion.Content>
                            <p className="mb-2 text-dark fw-bold ">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel className="py-5">
                          <Accordion.Title
                            className="acc-title postion-relative mb-4  pt-3 "
                            style={{ width: "100%" }}
                          >
                            Care Instructions
                          </Accordion.Title>
                          <Accordion.Content>
                            <p className="mb-2 text-dark fw-bold ">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <b className="fs-2 text-dark ">Description</b>
                <div className="bg-white p-3 mt-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-wrapper home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <b className="fs-2 text-dark">Reviews</b>
                <div className="review-inner-wrapper my-3 ">
                  <div className="review-head d-flex  justify-content-between align-item-end">
                    <div>
                      <h4 className="mb-2 head-txt">Customer Reviews</h4>
                      <div className="d-flex align-items-center gap-12">
                        <ReactStars
                          count={5}
                          value={2}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <b className="mb-0 review-txt-btm">
                          Based on 2 Reviews
                        </b>
                      </div>
                    </div>
                    {orderedProduct && (
                      <Link
                        to="/"
                        className="text-dark text-decoration-underline"
                      >
                        write a review
                      </Link>
                    )}
                  </div>
                  <div className="review-form my-3">
                    <form action="" className="d-flex flex-column gap-15">
                      <ReactStars
                        count={8}
                        value={2}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="first_name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="email"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Mobail number"
                        />
                      </div>
                      <div>
                        <textarea
                          name="msg"
                          id="msg"
                          cols={30}
                          rows={10}
                          className="w-100 form-control"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <input
                        type="submit"
                        value="contact"
                        className="btnContact btn btn-info"
                        style={{ width: "20%" }}
                      />
                    </form>
                  </div>
                  <div className="reviews-wrapper p-2 my-4 border-top border-2 my-2 ">
                    <div className="view  border-bottom-0 ">
                      <div className="d-flex gap-10">
                        <h2>Ali hussani</h2>
                        <ReactStars
                          count={5}
                          value={2}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="special-wrapper py-5 home-wrapper-2">
          <div className="container-xxl container-special">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
