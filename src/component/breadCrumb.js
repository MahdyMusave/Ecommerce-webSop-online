import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb(props) {
  console.log(props);
  const { title } = props;
  return (
    <>
      <div className="breadcrumb p-3 mb-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <p className="text-center mb-0 ">
                <Link to="/" className="text-black text-decoration-none">
                  Home
                </Link>
                &nbsp; / &nbsp;{title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreadCrumb;
