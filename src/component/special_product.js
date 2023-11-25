import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <>
      <div className="col-4">
        <div className="special-product-card py-4 radius-3 rounded-3 bg-white">
          <div className="d-flex justify-content-between">
            <div className="">
              <img src="./image/10_110x110.webp" alt="special-product" />
            </div>
            <div className="special-product-content">
              <h5 className="brand-title">Havel</h5>
              <h3 className="title">
                Samsung Galaxy Note10+ Mobile Phone; Sim...
              </h3>
              <ReactStars
                count={5}
                value={2}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$100 </span>
                &nbsp; <strike> $200</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-15">
                <p className="mb-0">
                  <b className="mx-2">5 </b>
                  <em>days</em>
                </p>
                <div className="d-flex gap-10 align-items-center ">
                  <span className="badge rounded-circle p-3 bg-warning">
                    23
                  </span>
                  :
                  <span className="badge rounded-circle p-3 bg-warning">
                    10
                  </span>
                  :
                  <span className="badge rounded-circle p-3 bg-warning">
                    09
                  </span>
                </div>
              </div>
              <div className="prod-cound mt-3">
                <p>Products: 5</p>
                <div className="progress " style={{ width: "90%" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "25%" }}
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="py-5">
                <Link to="/" className="button-cart ">
                  ADD TO CART
                </Link>
              </div>
              <div className="slider">SLAIDER</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
