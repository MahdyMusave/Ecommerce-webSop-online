import React from "react";
import BreadCrumb from "../component/breadCrumb";
import BlogCard from "../component/blogCard";
const Blog = () => {
  return (
    <>
      <BreadCrumb title="Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl blog-container">
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
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6">
                  <BlogCard style={{ width: "100%" }} />
                </div>

                <div className="col-6">
                  <BlogCard style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
