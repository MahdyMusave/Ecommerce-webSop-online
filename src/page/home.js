import React from "react";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../component/blogCard";
import ProductCard from "../component/productCard";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl main">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3 ">
                <img
                  src="./image/banner-main2.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link
                    to="/google.com"
                    className="button text-decoration-none"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3 ">
                  <img
                    src="./image/banner-laptop.png"
                    alt="banner"
                    className="img-fluid rounded-3"
                  />

                  <div className="small-banner-content position-absolute ">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUT IpadAir</h5>
                    <p>
                      From $999.00
                      <br></br>
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3 ">
                  <img
                    src="./image/watch-card.png"
                    alt="banner"
                    className="img-fluid rounded-3"
                  />

                  <div className="small-banner-content position-absolute ">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUT IpadAir</h5>
                    <p>
                      From $999.00
                      <br></br>
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3 ">
                  <img
                    src="./image/Ipad.png"
                    alt="banner"
                    className="img-fluid rounded-3"
                  />

                  <div className="small-banner-content position-absolute ">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUT IpadAir</h5>
                    <p>
                      From $999.00
                      <br></br>
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3 ">
                  <img
                    src="./image/headphone.png"
                    alt="banner"
                    className="img-fluid rounded-3"
                  />

                  <div className="small-banner-content position-absolute ">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUT IpadAir</h5>
                    <p>
                      From $999.00
                      <br></br>
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex  align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <div className="servies-icon">
                    <img src="./image/kingpng.png" alt="free-sapport" />
                  </div>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">from all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <div className="servies-icon">
                    <img src="./image/gift.png" alt="gift" />
                  </div>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <div className="servies-icon">
                    <img src="./image/sapport_24.png" alt="sapport_24" />
                  </div>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <div className="servies-icon">
                    <img src="./image/discount_tag.png" alt="discount" />
                  </div>
                  <div>
                    <h6> Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <div className="servies-icon">
                    <img src="./image/payment.png" alt="payment" />
                  </div>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2-categories py-5">
        <div className="container-xxl container-categories">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex  flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/gaming.png" alt="gaming" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/camera.png" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/smart_tv.png" alt="smart_tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Airpad</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/airpad.png" alt="airpad" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/gaming.png" alt="gaming" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/gaming.png" alt="gaming" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/gaming.png" alt="gaming" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./image/gaming.png" alt="gaming" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Featuredcollection-wrapper py-4 home-wrapper-2">
        <div className="container-xxl container-blog">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
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
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl container-blog">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latast Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper  home-wrapper-2 py-5">
        <div className="container-xxl container-cart">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div>
                    <img src="./image/camera.png" alt="" />
                  </div>
                  <div>
                    <img src="./image/camera.png" alt="" />
                  </div>
                  <div>
                    <img src="./image/camera.png" alt="" />
                  </div>
                  <div>
                    <img src="./image/camera.png" alt="" />
                  </div>
                  <div>
                    <img src="./image/camera.png" alt="" />
                  </div>
                  <div>
                    <img src="./image/camera.png" alt="" />
                  </div>
                  <div>
                    <img src="./image/camera.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl container-blog">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latast Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
