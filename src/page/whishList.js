import React from "react";
import Meta from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
const WhishList = () => {
  return (
    <>
      <Meta title="whish-list" />
      <BreadCrumb title="whish List" />
      <div className="whishList">
        <div className="whishList-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhishList;
