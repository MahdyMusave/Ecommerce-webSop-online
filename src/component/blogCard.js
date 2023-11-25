import { Link, NavLink } from "react-router-dom";
const BlogCard = () => {
  return (
    <>
      <div className="card-blog">
        <div className="card-image">
          <img
            src="./image/blog-5_405x.jpg"
            className="card-img-top"
            alt="Morning_Renaissance"
          />
        </div>
        <div className="blog-content p-4">
          <p className="date">20 November, 2023</p>
          <h2 className="title">A Beautiful Sunday Morning Renaissance</h2>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
