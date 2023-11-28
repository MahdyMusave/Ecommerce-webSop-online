import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  // console.log(location);
  return (
    <>
      <div
        className={
          location.pathname === "/store"
            ? `grid-product-display-${grid}`
            : "col-2"
        }
      >
        <Link
          to="/store/:id"
          className="card-product-link text-decoration-none"
        >
          <div className="card-product position-relative">
            <div className="wishlist-icon d-flex justify-content-end mt-3 mx-3">
              <img src="./image/wishlist-1-256.png" alt="wishlist" />
            </div>
            <div className="product-cart-image px-5 ">
              <img
                src="./image/tv_smart.png"
                className="img-fluid"
                alt="product_image"
              />
              <img
                src="./image/smart_tv.png"
                className="img-fluid"
                alt="product_image"
              />
            </div>
            <div className="product-content px-4 py-3">
              <p className="product-caption-with-letter">Sony</p>
              <h3 className="product-info">
                Kids headphones bulk 10 pack multi colored for students
              </h3>
              <span className="rating">
                <ReactStars
                  count={5}
                  value={2}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
              </span>
              <span className="price-item ">3.32$</span>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column ">
                <Link to="/" className="mt-2">
                  <img src="./image/arrow-shuffle_1.svg" alt="" />
                </Link>
                <Link to="/" className="mt-2">
                  <img src="./image/eye.png" alt="" />
                </Link>
                <Link to="/" className="mt-2">
                  <img src="./image/shop_cart.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default ProductCard;
