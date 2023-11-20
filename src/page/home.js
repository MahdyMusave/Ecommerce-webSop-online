import React from "react";
import { Link, NavLink } from "react-router-dom";

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
    </>
  );
}

export default Home;
