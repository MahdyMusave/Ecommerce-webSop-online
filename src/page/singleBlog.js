import React from "react";
import Meta from "../component/meta";
import BreadCrumb from "../component/breadCrumb";
import BlogCard from "../component/blogCard";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const SingleBlog = () => {
  return (
    <>
      <Meta title="single blog" />
      <BreadCrumb title="single blog" />
      <div className="single-wrapper home-wrapper-2 py-5">
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
              <div className="single-blog-card">
                <h2 className="title">
                  A beautiful Sunday Morning Renaissance
                </h2>
                <img src="./image/blog-4.webp" alt="single-blog-img" />
                <p>
                  We love these outfits styled by Phyllis Evans Baker for a
                  Calvin Klein collaboration with the Marie Claire & Esquire
                  teams. You can find mas on their website, primed for purchase.
                  This is your first post. Edit or delete it, then start
                  writing! Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <Link to="/blog" className="text-decoration-none text-dark fs-5">
                  <FaArrowAltCircleLeft className="mx-2" />
                  Go back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
