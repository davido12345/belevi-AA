import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sec1 from "../assets/images/course/sec-1.png";
import sec2 from "../assets/images/course/sec-2.png";
import testimonialImg from "../assets/images/course/testimonial-img.png";

import section2 from "../assets/images/our-mission/section-4.png";
import Slider from "react-slick";
import ArrowRight from "../assets/icons/ArrowRight";
import ArrowLeft from "../assets/icons/ArrowLeft";

export default function CoursePage() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1192,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="bg-light" style={{ overflow: "hidden" }}>
      <div className="container-xl">
        <div className="container-fluid">
          <div className="course-sec-1 py-7">
            <div className="row justify-content-center flex-sm-row-reverse py-3  ">
              <div className="col-12 col-md-5 col-lg-6 ">
                <img src={sec1} className="img-fluid-2" />
              </div>
              <div className="col-12 col-md-5 col-lg-6 course-sec1-left">
                <h1 className="font-48 text-left my-3 ">
                  Intense and proffessional courses made to educate to use the
                  best products
                </h1>
                <p className="font-20 font-weight-300 my-3">
                  The industry has been growing at a rate <br /> of 0.0 Billion
                  dollars, now it’s your
                  <br /> chance to join.
                </p>
                <Link to="/courses-desktop" className="linkName">
                  <a className="btn-custom rounded-pill mt-3">view courses</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="course-sec-2 py-7 ">
            <div className="text-center mb-5">
              <p className="font-24 m-0 ">
                Master Classes, Live webinars and Courses from industry leaders.
              </p>
              <p className="font-24 m-0  border-bottom-dark d-inline">
                more info
              </p>
            </div>
            <div className="row gx-3 gy-4 justify-content-center py-5">
              <div className="col-12 col-sm-6 col-xl-4 d-flex justify-content-center align-items-center flex-column">
                <motion.button
                  whileHover={{ scale: 1.1, zIndex: 9999 }}
                  whileTap={{ scale: 0.9, zIndex: 2 }}
                  class="card p-0  text-start"
                >
                  <Link to="/courses-desktop" className="linkName">
                    <img src={section2} class="card-img-top" alt="..." />
                    <div class="card-body ">
                      <h5 class="card-title font-24 mb-4">
                        Hilos tensores de traccion con canula
                      </h5>
                      <div class="card-text">
                        <div className="my-5">
                          <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18 color-default-light">
                            <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                          </div>
                          <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18 color-default-light">
                            <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <p className="m-0 text-normal-sky font-18">$399.000</p>

                          <a className="btn-custom rounded-pill">view courses</a>

                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.button>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 d-flex justify-content-center align-items-center flex-column">
                <motion.button
                  whileHover={{ scale: 1.1, zIndex: 9999 }}
                  whileTap={{ scale: 0.9, zIndex: 2 }}
                  class="card p-0  text-start"
                >
                  <Link to="/courses-desktop" className="linkName">
                    <img src={section2} class="card-img-top" alt="..." />
                    <div class="card-body ">
                      <h5 class="card-title font-24 mb-4">
                        Hilos tensores de traccion con canula
                      </h5>
                      <div class="card-text">
                        <div className="my-5">
                          <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18 color-default-light">
                            <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                          </div>
                          <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18 color-default-light">
                            <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <p className="m-0 text-normal-sky font-18">$399.000</p>

                          <a className="btn-custom rounded-pill">view courses</a>

                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.button>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 d-flex justify-content-center align-items-center flex-column">
                <motion.button
                  whileHover={{ scale: 1.1, zIndex: 9999 }}
                  whileTap={{ scale: 0.9, zIndex: 2 }}
                  class="card p-0  text-start"
                >
                  <Link to="/courses-desktop" className="linkName">
                    <img src={section2} class="card-img-top" alt="..." />
                    <div class="card-body ">
                      <h5 class="card-title font-24 mb-4">
                        Hilos tensores de traccion con canula
                      </h5>
                      <div class="card-text">
                        <div className="my-5">
                          <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18 color-default-light">
                            <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                          </div>
                          <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18 color-default-light">
                            <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <p className="m-0 text-normal-sky font-18">$399.000</p>

                          <a className="btn-custom rounded-pill">view courses</a>

                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.button>
              </div>
            </div>
          </div>
          <div className="course-sec-3 py-7 pb-7">
            <Slider {...settings}>
              <div>
                <div className="row g-0">
                  <div className="col-12 col-lg-6 border">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="p-5 p-md-3 p-xl-5 ">
                        <div className="media">
                          <img src={testimonialImg} />
                          <div>
                            <p className="color-default mb-1">
                              Dr. Predervor Vorder Kren
                            </p>
                            <p className="color-secondary-2">
                              Sole practicioneer.
                            </p>
                          </div>
                        </div>
                        <p className="font-20 font-weight-300 py-5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fames condimentum purus amet nullam. Turpis diam
                          viverra ornare adipiscing ipsum. Urna est condimentum
                          tellus pharetra metus duis velit.{" "}
                        </p>
                        <Link to="/courses-desktop" className="linkName">
                          <a className="btn-custom rounded-pill">view course</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 d-none d-md-block">
                    <img
                      src={sec2}
                      className="h-100 "
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="row g-0">
                  <div className="col-12 col-lg-6 border">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="p-5 p-md-3 p-xl-5 ">
                        <div className="media">
                          <img src={testimonialImg} />
                          <div>
                            <p className="color-default mb-1">
                              Dr. Predervor Vorder Kren
                            </p>
                            <p className="color-secondary-2">
                              Sole practicioneer.
                            </p>
                          </div>
                        </div>
                        <p className="font-20 font-weight-300 py-5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fames condimentum purus amet nullam. Turpis diam
                          viverra ornare adipiscing ipsum. Urna est condimentum
                          tellus pharetra metus duis velit.{" "}
                        </p>
                        <Link to="/courses-desktop" className="linkName">
                          <a className="btn-custom rounded-pill">view course</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 d-none d-md-block">
                    <img
                      src={sec2}
                      className="h-100 "
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
