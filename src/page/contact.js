import BreadCrumb from "../component/breadCrumb";
import Meta from "../component/meta";
import { FaHome } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="contact" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl container-contact ">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.77894725374955!2d-94.27834192325071!3d39.02439016041758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c11badf2e055ad%3A0x49de7ac942936472!2s705%20NW%2011%20St%2C%20Blue%20Springs%2C%20MO%2064015!5e0!3m2!1sen!2s!4v1700902436415!5m2!1sen!2s"
                width={600}
                height={400}
                className="border-0 w-100"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper d-flex justify-content-between flex-wrap align-items-start">
                <div className="left p-4 rounded-4" style={{ width: "50%" }}>
                  <h3>Contact </h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first_name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobail number"
                      />
                    </div>
                    <div>
                      <textarea
                        name="msg"
                        id="msg"
                        cols={30}
                        rows={10}
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      value="contact"
                      className="btnContact btn btn-info"
                      style={{ width: "20%" }}
                    />
                  </form>
                </div>
                <div className="left  p-4 rounded-4" style={{ width: "50%" }}>
                  <h3 className="mx-4 contact-title">Get in touch with us</h3>
                  <div className="icon-box">
                    <ul className="p-eo2">
                      <li className="d-flex flex-wrap mb-0 py-2">
                        <FaHome className="fs-5" />
                        <address className="mx-2 mb-0">
                          Iran Mashhad Golshar Avini
                        </address>
                      </li>
                      <li className="py-2">
                        <FaSquarePhone className="fs-5" />
                        <Link
                          href="tel:+09380325329"
                          className="mx-2 text-decoration-none"
                        >
                          09380325329
                        </Link>
                      </li>
                      <li className="py-2">
                        <MdMarkEmailRead className="fs-5" />
                        <Link
                          href="emailTo:musavemahdy@gmail.com"
                          className="mx-2 text-decoration-none"
                        >
                          musavemahdy@gmail.com
                        </Link>
                      </li>
                      <li className="py-2 d-flex align-items-center">
                        <FaInfo className="fs-5" />
                        <p className="mx-2 mb-0">Monday-friday 10 Am-8 PM</p>
                      </li>
                    </ul>
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
export default Contact;
