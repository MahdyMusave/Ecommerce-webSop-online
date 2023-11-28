import Mate from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
import { IoMdClose } from "react-icons/io";
const CompareProduct = () => {
  return (
    <>
      <Mate title="compare Product" />
      <BreadCrumb title="compare product" />
      <div className="copare bg-info">
        <div className="compare-wrapper py-5 home-wrapper-2">
          <div className="container-xxl compare-container">
            <div className="row">
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <IoMdClose className="position-absolute cross fs-3" />
                  <div className="compare-product-image">
                    <img src="./image/watch.png" alt="watch" width={400} />
                  </div>
                  <div className="compare-product-details pb-3">
                    <h5 className="title fw-500">
                      Honor T1 7.0 1 Gb RAM 8 GB FROM 7 Inch with Wi+3g tablet
                    </h5>
                    <h6 className="title">$100.00</h6>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <IoMdClose className="position-absolute cross fs-3" />
                  <div className="compare-product-image">
                    <img src="./image/watch.png" alt="watch" width={400} />
                  </div>
                  <div className="compare-product-details pb-3">
                    <h5 className="title fw-500">
                      Honor T1 7.0 1 Gb RAM 8 GB FROM 7 Inch with Wi+3g tablet
                    </h5>
                    <h6 className="title">$100.00</h6>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <IoMdClose className="position-absolute cross fs-3" />
                  <div className="compare-product-image">
                    <img src="./image/watch.png" alt="watch" width={400} />
                  </div>
                  <div className="compare-product-details pb-3">
                    <h5 className="title fw-500">
                      Honor T1 7.0 1 Gb RAM 8 GB FROM 7 Inch with Wi+3g tablet
                    </h5>
                    <h6 className="title">$100.00</h6>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <IoMdClose className="position-absolute cross fs-3" />
                  <div className="compare-product-image">
                    <img src="./image/watch.png" alt="watch" width={400} />
                  </div>
                  <div className="compare-product-details pb-3">
                    <h5 className="title fw-500">
                      Honor T1 7.0 1 Gb RAM 8 GB FROM 7 Inch with Wi+3g tablet
                    </h5>
                    <h6 className="title">$100.00</h6>
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

export default CompareProduct;
